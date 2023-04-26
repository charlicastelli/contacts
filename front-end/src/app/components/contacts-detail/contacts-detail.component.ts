import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

//import { HomeComponent } from '../home/home.component';
import { ContactsService } from '../service/contacts/contacts.service';
import { Model } from 'src/app/shared/model/model';


@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {


  selectedContact: any = Model;
  fileToUpload!: File;
  selectedId!: number;


  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    //private home: HomeComponent
  ) { }


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

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files.item(0);
  }

  update() {
    this.contactsService.updateContact(this.selectedContact, this.fileToUpload).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Ocorreu um erro na atualização.');
      }
    );
  }

  newMember() {
   // this.router.navigate(['new-member']);
  }

  // deleteMember() {
  //   this.contactsService.removeMember(this.selectedId).subscribe(
  //     (data) => {
  //       let index;
  //       this.home.contacts.forEach((e, i) => {
  //         if (e.id == this.selectedId) {
  //           index = i;
  //         }
  //       });
  //       this.home.contacts.splice(Number(index), 1);
  //       //this.router.navigate(['new-member']);
  //     },
  //     (error) => {
  //       console.log('Aconteceu um erro no updateMember');
  //     }
  //   );
  // }

}
