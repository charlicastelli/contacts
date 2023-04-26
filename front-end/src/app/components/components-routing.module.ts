import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-detail/:id', component: ContactsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
