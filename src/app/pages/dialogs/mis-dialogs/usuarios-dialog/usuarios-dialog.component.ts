import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  usuario: {
    nombre: string;
    apellido: string;
  }
}

@Component({
  selector: 'app-usuarios-dialog',
  templateUrl: './usuarios-dialog.component.html',
  styleUrls: ['./usuarios-dialog.component.scss']
})
export class UsuariosDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
}
