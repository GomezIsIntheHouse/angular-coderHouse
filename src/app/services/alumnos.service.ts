import { Injectable } from '@angular/core';
import { Estudiante } from '../pages/tablas/tablas.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  
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

  constructor() { }

  getEstudiante(){
    return this.estudiantes.slice();
  }

  eliminarEstudiante(usuario:Estudiante){
    this.estudiantes = this.estudiantes.filter( listaData => listaData.id !== usuario.id);

  }

  guardarEstudiante(usuario:Estudiante){
    this.estudiantes.push(usuario)

    
  }
}
