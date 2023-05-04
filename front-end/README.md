# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

### Comandos utilizados

- `ng add @angular/material` (instalar Angular Material)
- `ng generate module components --routing` (Criar pasta components com o `module` e `routing.module`)
- `ng g module components/core` (Criar pasta core com o `module`)
- `ng g service components/core/service/theme` (Criar um serviço chamado theme)
- `ng g component components/home`
- `ng g module shared` (Criar pasta shared com o `module`)
- `ng g module shared/angular-material` (Criar modulo onde vou colocar todos os componente Angular Material)
- `ng g service components/service/contacts/contacts `
- `ng g component components/contacts-detail`
- `ng g component components/edit-contact`
- `ng g interface shared/model/model `
- `ng g component shared/confirm-dialog`
- `ng g component components/new-contact`
- `ng g service components/service/messages/messages`
- `ng g component shared/message-success`
- `ng g component shared/message-error`
- `ng g component shared/error-dialog`


### help
<tr
    mat-row
    *matRowDef="let row; columns: displayedColumns" 
    (click)="clickedRows(row)" 
></tr>z

- O `(click)="clickedRows(row)"` no código acima pode ser usado para que algo aconteça quando clicado em qualquer parte da row da tabela