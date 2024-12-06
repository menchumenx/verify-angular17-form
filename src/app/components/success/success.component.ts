import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

  constructor(private router: Router){}

    // Método que se ejecuta al enviar el formulario
    backToLogin(): void {
        this.router.navigate(['/']); // Redirige al login
    }
}
