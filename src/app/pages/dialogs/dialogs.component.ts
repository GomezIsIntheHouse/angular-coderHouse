import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDialogComponent } from './mis-dialogs/usuarios-dialog/usuarios-dialog.component';
import { ComidasDialogComponent } from './mis-dialogs/comidas-dialog/comidas-dialog.component';


@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {

  constructor(
    private dialogService: MatDialog
  ) {}



  abrirDialogoDeUsuarios(): void {
    const dialogo = this.dialogService.open(UsuariosDialogComponent, {
      data: {
        usuario: {
          nombre: 'josue2',
          apellido: 'baez',
        }
      }
    });

    dialogo.afterClosed()
      .subscribe((valor) => console.log(valor));
  }




  abrirDialogoDeComidas(): void {
    this.dialogService.open(ComidasDialogComponent);
  }
}
