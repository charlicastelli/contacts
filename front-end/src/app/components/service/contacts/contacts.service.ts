import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  //listar todos os contatos
  getAllContacts(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'contacts/', {
      headers: this.httpHeaders,
    });
  }

  //Buscar contato pelo id, mostrando todos os detalhes do contato buscado
  getContact(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'contacts/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  //Salvar contato
  saveNewContact(contact: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'contacts/', contact);
  }

  //Atualizar contato
  updateContact(contact: any, fileToUpload: File | null): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('name', contact.name);
    formData.append('surname', contact.surname);
    formData.append('phone', contact.phone);
    formData.append('email', contact.email);
    formData.append('company', contact.company);
    if (fileToUpload) {
      formData.append('photo', fileToUpload, fileToUpload.name);
    }
    return this.httpClient.put(
      this.baseUrl + 'contacts/' + contact.id + '/',
      formData
    );
  }

  //Excluir contato
  removeContact(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + 'contacts/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
}
