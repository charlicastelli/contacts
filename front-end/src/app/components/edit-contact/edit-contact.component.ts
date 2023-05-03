import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactsService } from '../service/contacts/contacts.service';
import { Model } from 'src/app/shared/model/model';
import { Location } from '@angular/common';
import { MessageSuccessComponent } from 'src/app/shared/message-success/message-success.component';
import { MessagesService } from '../service/messages/messages.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  selectedContact: any = Model;
  fileToUpload!: File;

  imageURL!: string;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
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
      this.loadContact(id!);
    });
  }

  //Carregar na tela o contato
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

  update() {
    this.contactsService
      .updateContact(this.selectedContact, this.fileToUpload)
      .subscribe(
        (data) => {
          this.router.navigate(['/']);
          this.messageService.header('Sucesso');
          this.messageService.add('Contato editado com sucesso!');
        },
        (error) => {
          console.log('Ocorreu um erro na atualização.');
        }
      );
  }

  onCancel() {
    this.location.back();
  }
}
