import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MessageSuccessComponent } from './message-success/message-success.component';

@NgModule({
  declarations: [ConfirmDialogComponent, MessageSuccessComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [ConfirmDialogComponent, MessageSuccessComponent],
})
export class SharedModule {}
