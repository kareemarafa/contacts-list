import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactComponent } from './contact.component';
import {AddContactComponent} from "./add-contact/add-contact.component";

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, ReactiveFormsModule],
  declarations: [ContactComponent, AddContactComponent],
  exports: [ContactComponent, AddContactComponent]
})
export class ContactModule {}
