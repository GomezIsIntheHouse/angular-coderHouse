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
  edit:boolean = false;

  alumnosForm!: FormGroup;

  // alumnosForm = new FormGroup({
  //   nombre: this.nombreControl,
  //   apellido: this.apellidoControl,
  // });

  constructor(
    private dialogRef: MatDialogRef<AbmAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    
    ) {}

  ngOnInit(): void {
    this.usuario = this.data?.usuario;
    {this.usuario?this.edit=true:this.edit=false}
    this.CreateAlumnosForm(this.usuario)
  }

  CreateAlumnosForm(usuario?:Estudiante){
    {this.usuario? console.log(true) : console.log('no hay usuario')}
    this.alumnosForm = this.formBuilder.group({
      
      nombreControl: [usuario ? usuario.nombre : '', [Validators.required]],
      apellidoControl: [usuario ? usuario.apellido : '', [Validators.required]],
      
    });
  }

  guardar(): void {
    console.log(this.alumnosForm.getRawValue())
    
    if (this.alumnosForm.valid) {
     
      this.dialogRef.close(this.alumnosForm.value)
    } else {
      this.alumnosForm.markAllAsTouched();
    }
  }

  
}
