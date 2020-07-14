import {Component} from '@angular/core';
import {DataService} from '../services/data.service';
import { ModalController } from '@ionic/angular';
import {AddContactComponent} from "../contact/add-contact/add-contact.component";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    contacts: any = []
    recentContacts: any = []

    constructor(private data: DataService, public modalController: ModalController) {
        this.getContacts()
        this.getRecentContacts()
    }

    refresh(ev) {
        setTimeout(() => {
            ev.detail.complete();
        }, 3000);
    }

    getContacts() {
        this.contacts = this.data.getContacts()
    }


    getRecentContacts() {
        this.recentContacts = this.data.getRecentContacts()
    }

    search(event) {
        this.getContacts();
        const val = event.target.value.toLowerCase();
        if (val && val.trim() != '') {
            this.contacts = this.contacts.filter((item) => {
                if (item && item.firstName) {
                    return (item.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1);
                }
            })
        }
    }

    scroll(id) {
        const el = document.getElementById(`contact-group-${id}`)
        el.scrollIntoView({ block: 'start',  behavior: 'smooth'})
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: AddContactComponent,
            cssClass: 'my-custom-class',
        });
        await modal.present();
        await modal.onDidDismiss().then(() => this.getContacts());
    }
}
