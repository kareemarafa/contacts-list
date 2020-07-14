import { Component, OnInit } from '@angular/core';
import {Contact, DataService} from '../../services/data.service';
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-add-contact',
    templateUrl: './add-contact.component.html',
    styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {

    form: FormGroup;

    constructor(private modal: ModalController, private fb: FormBuilder, private data: DataService) { }

    ngOnInit() {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
        })
    }


    back() {
        this.modal.dismiss();
    }


    addNewContact() {
        const contact = {
            ...this.form.value,
            "display": "block",
        }
        this.data.addContact(contact).then(() => this.back())
    }
}
