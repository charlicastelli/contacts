import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Model } from 'src/app/shared/model/model';

import { ContactsService } from '../service/contacts/contacts.service';

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
    private router: Router
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
    this.contactsService.removeContact(this.selectedId).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Aconteceu um erro no updateMember');
      }
    );
  }
}