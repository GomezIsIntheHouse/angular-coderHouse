import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estudiante } from '../tablas.component';
@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit{
  usuario!: Estudiante;
  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);

  alumnosForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
  });

  constructor(
    private dialogRef: MatDialogRef<AbmAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.usuario = this.data?.usuario;
    
  }

  // CreateAlumnosForm(usuario?:Estudiante){
  //   this.alumnosForm = this.formBuilder.group({
  //     id: [usuario ? usuario.id : null],
  //     nombre: [usuario ? usuario.nombre : '', [Validators.required]],
  //     apellido: [usuario ? usuario.apellido : '', [Validators.required]],
      
  //   });
  // }

  guardar(): void {
    if (this.alumnosForm.valid) {
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }

  
}
