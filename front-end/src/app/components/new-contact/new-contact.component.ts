import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Model } from 'src/app/shared/model/model';

import { ContactsService } from '../service/contacts/contacts.service';
import { MessagesService } from '../service/messages/messages.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
})
export class NewContactComponent implements OnInit {
  //newContact: any = Model;
  newContact = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    company: '',
    photo: '',
  };
  fileToUpload!: File;
  imageURL!: string;

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private location: Location,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {}

  save() {
    const formData = new FormData();
    formData.append('name', this.newContact.name);
    formData.append('surname', this.newContact.surname);
    formData.append('phone', this.newContact.phone);
    formData.append('email', this.newContact.email);
    formData.append('company', this.newContact.company);
    if (this.fileToUpload) {
      formData.append('photo', this.fileToUpload, this.fileToUpload.name);
    }

    this.contactsService.saveNewContact(formData).subscribe(
      (data) => {
        this.newContact = data;
        this.router.navigate(['']);
        this.messageService.header('Sucesso');
        this.messageService.add('Contato salvo com sucesso!');
      },
      (error) => {
        console.log('Erro ao salvar contato');
      }
    );
  }

  //Carrega quando uma imagem for selecionada
  onFileSelected(event: any) {
    this.fileToUpload = event.target.files.item(0);

    //Carrega preview da imagem antes de salvar
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  onCancel() {
    this.location.back();
  }
}
