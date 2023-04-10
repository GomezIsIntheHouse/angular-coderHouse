import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsComponent } from './dialogs.component';
import { MatButtonModule } from '@angular/material/button';
import { UsuariosDialogComponent } from './mis-dialogs/usuarios-dialog/usuarios-dialog.component';
import { ComidasDialogComponent } from './mis-dialogs/comidas-dialog/comidas-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DialogsComponent,
    UsuariosDialogComponent,
    ComidasDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    DialogsComponent
  ]
})
export class DialogsModule { }
