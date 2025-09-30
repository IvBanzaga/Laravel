import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
  /* TODO: Componente raíz de la aplicación Angular */
  export class App {
    /* TODO: Título mostrado en el layout principal */
    protected readonly title = signal('frontend-angular');
  }
