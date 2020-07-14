import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

import {HomePage} from './home.page';
import {HomePageRoutingModule} from './home-routing.module';
import {ContactModule} from '../contact/contact.module';
import {NgPipesModule} from "ng-pipes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ContactModule,
        HomePageRoutingModule,
        NgPipesModule
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
