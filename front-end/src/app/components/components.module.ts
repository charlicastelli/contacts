import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, ContactsDetailComponent, EditContactComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class ComponentsModule {}
