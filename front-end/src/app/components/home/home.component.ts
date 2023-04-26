import { Component } from '@angular/core';
import { ContactsService } from '../service/contacts/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contacts = [];
  displayedColumns: string[] = ['name', 'email', 'phone'];


  constructor(
    private contactService: ContactsService,
    private router: Router
    ) { 
    this.getContacts();
  }

  getContacts() {
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data;
      }, 
      (error) => {
        console.log('Aconteceu um erro');
      }
    );
  };

  clickedRows(row: any) {
    this.router.navigate(['contact-detail', row.id]);
    console.log(row.id);
    console.log(row.name);
    console.log(row.email);
    console.log(row.phone);
  }
}
