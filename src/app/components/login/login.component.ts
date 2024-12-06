import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from './password.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required, // El email es obligatorio
        Validators.email // Debe ser un email válido
      ]],
      password: ['', [
        Validators.required, // La contraseña es obligatoria
        passwordValidator() // Validador personalizado para complejidad de la contraseña
      ]]
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmitForm(): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/success']); // Redirige a la pantalla de éxito si el formulario es válido
      this.loginForm.reset(); // Limpia los valores del formulario
    } else {
      this.loginForm.markAllAsTouched(); // Marca todos los campos como "touched" para mostrar los errores
    }
  }

  // Getters para acceder a los controles del formulario desde la plantilla
  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }
}
