import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PostService } from '../post-service';

@Component({
  selector: 'app-create',
  imports: [RouterModule, FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
  /* TODO: Campos del formulario de creación */
  title = '';
  content = '';
  error = '';

  /* TODO: Inyectar servicio y router para crear y redirigir */
  constructor(private postService: PostService, private router: Router) {}

  /* TODO: Enviar formulario: validar, crear post y redirigir */
  submit(){
    if(!this.title || !this.content){
      /* TODO: Mostrar error si faltan campos obligatorios */
      this.error = ('Titulo y Contenido son obligatorios');
      return;
    }
    const input = {
      title: this.title,
      content: this.content,
      id: 1
    }

    /* TODO: Llamar al servicio para crear el post */
    this.postService.createPost(input).subscribe({});

    /* TODO: Notificar al usuario y navegar al índice */
    alert("Post creado correctamente");

    this.router.navigate(['/']);
  }
  
}
