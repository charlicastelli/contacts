import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ContactsService } from '../service/contacts/contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  contacts = [];
  displayedColumns: string[] = ['name', 'email', 'phone'];

  constructor(
    private contactService: ContactsService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data;
        console.log(this.contacts);
      },
      (error) => {
        this.onError('Erro ao carregar informações!');
      }
    );
  }

  clickedRows(row: any) {
    this.router.navigate(['contact-detail', row.id]);
  }

  newContact() {
    this.router.navigate(['new-contact']);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

}
