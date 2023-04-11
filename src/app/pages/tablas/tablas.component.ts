import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date;
  
}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {


  estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Sosa',
      fecha_registro: new Date()
    },
    {
      id: 2,
      nombre: 'Miriam',
      apellido: 'Paez',
      fecha_registro: new Date()
    },
    {
      id: 3,
      nombre: 'Cynthia',
      apellido: 'Coronel',
      fecha_registro: new Date()
    },
  ];

  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = ['id', 'nombreCompleto', 'fecha_registro', 'actions'];

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private matDialog: MatDialog) {}


  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }

  openModalEdit(usuario: Estudiante){
    console.log(usuario.nombre)
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: {
        usuario: usuario
      }
    });

    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            fecha_registro: new Date(),
            id: valor.id
          }
        ];
      }
    })
}
}
