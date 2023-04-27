import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'contact-detail/:id', component: ContactsDetailComponent },
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
