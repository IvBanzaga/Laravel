import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post-service';

@Component({
  selector: 'app-index',
  imports: [RouterModule],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  /* TODO: Lista local de posts cargada desde la API */
  posts: Post[] = [];

  /* TODO: Inyectar servicio para realizar operaciones sobre posts */
  constructor(private postService: PostService) {}

  /* TODO: Cargar posts cuando el componente se inicializa */
  ngOnInit(): void {
    this.loadPosts();
  }

  /* TODO: Eliminar un post preguntando confirmación al usuario */
  deletePost(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este post?')) {
      this.postService.deletePostById(id).subscribe(() => {
        /* TODO: Recargar la lista después de eliminar */
        this.postService.getPosts().subscribe((data: Post[]) => {
          this.posts = data;
        });
      });
    }
  }

  /* TODO: Solicitar al servicio la lista de posts y asignarla */
  loadPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
