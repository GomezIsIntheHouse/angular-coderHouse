import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { AlumnosService } from 'src/app/services/alumnos.service';

// import alumnosList from '../../data/alumnos.json'

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

  constructor(private matDialog: MatDialog, private as:AlumnosService) {}


  abrirABMAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {

      console.log({...valor,
        fecha_registro: new Date(),
        id: this.dataSource.data.length + 1,})

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

  // editarAlumno(i: number) {
  //   const dialog = this.matDialog.open(AbmAlumnosComponent);
  //   dialog.afterClosed().subscribe((valor: Alumno) => {
  //     if (valor) {
  //       this.dataSource.data=[...this.dataSource.data]
  //       this.dataSource.data[i] = {
  //         id:i+1,
  //         nombre: valor.nombre,
  //         apellido: valor.apellido,
  //         email: valor.email,
  //         fechaNacimiento: valor.fechaNacimiento,
  //         seccion: valor.seccion,
  //         nota: valor.nota,
  //       };
  //       this.dataSource.data=[...this.dataSource.data]
  //     }
  //     console.log(this.dataSource.data)
  //   });
  // }

  openModalEdit(usuario: Estudiante){
    console.log(usuario.nombre)
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: {
        usuario: usuario
      }
    });

    dialog.afterClosed().subscribe((valor: Estudiante) => {

      console.log('VALOR.ID',valor)

      if (valor) {
        this.dataSource.data=[...this.dataSource.data]
        this.dataSource.data[usuario.id] = {
          id:usuario.id,
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          fecha_registro:usuario.fecha_registro
        };
        this.dataSource.data=[...this.dataSource.data]
      }
      console.log(this.dataSource.data)
    });


}

  deleteUser(id:number){
    console.log('eliminando usuario')
    this.estudiantes = this.estudiantes.filter( listaData => listaData.id !== id);
    console.log(this.estudiantes)
  }
}
