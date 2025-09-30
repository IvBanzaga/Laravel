import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post-service';

@Component({
  selector: 'app-edit',
  imports: [RouterModule, FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  /* TODO: Identificador y campos editables del post */
  id = '';
  title = '';
  content = '';
  error = '';

  /* TODO: Inyectar servicio, router y la ruta activa para obtener params */
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {}

  /* TODO: Al inicializar, leer el id de la ruta y cargar el post */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.findPost(Number(this.id)).subscribe((post: Post) => {
      this.title = post.title;
      this.content = post.content;
    });
  }

  /* TODO: Validar y enviar la actualización del post */
  submit() {
    if (!this.title || !this.content) {
      this.error = 'Titulo y Contenido son obligatorios';
      return;
    }
    const input = {
      title: this.title,
      content: this.content,
      id: 1,
    };

    /* TODO: Llamar al servicio para actualizar y redirigir */
    this.postService.updatePost(Number(this.id), input).subscribe(() => {
      alert('Post actualizado correctamente');
      this.router.navigate(['/']);
    });
  } 
}
