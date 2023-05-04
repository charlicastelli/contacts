import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { Model } from 'src/app/shared/model/model';

import { ContactsService } from '../service/contacts/contacts.service';
import { MessagesService } from '../service/messages/messages.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss'],
})
export class ContactsDetailComponent implements OnInit {
  selectedContact: any = Model;
  selectedId!: number;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    public dialog: MatDialog,
    private location: Location,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    /*
    Observable vai monitorar e para cada click que eu fizer
    ele vai capturar o id passado na url e vai carregar a função loadMember,
    assim atualizando a tela.
    */
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id: number = Number(param.get('id'));
      this.selectedId = id;
      this.loadContact(id!);
    });
  }

  loadContact(id: number) {
    //capturar o id enviado na rota 'member-detail/:id'
    this.contactsService.getContact(id).subscribe(
      (data) => {
        this.selectedContact = data;
      },
      (error) => {
        console.log('Aconteceu um erro no loadmember');
      }
    );
  }

  editContact() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id: number = Number(param.get('id'));
      this.router.navigate(['edit-contact', id]);
    });
  }

  deleteContact() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja remover este item?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.contactsService.removeContact(this.selectedId).subscribe(
          (data) => {
            this.router.navigate(['/']);
            this.messageService.header('Sucesso');
            this.messageService.add('Contato excluido com sucesso!');
          },
          (error) => {
            console.log('Aconteceu um erro no updateMember');
          }
        );
      }
    });
  }

  onCancel() {
    this.location.back();
  }
}
