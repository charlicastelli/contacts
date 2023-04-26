import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    ContactsDetailComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ComponentsModule { }
