import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post-service';

@Component({
  selector: 'app-show',
  imports: [RouterModule],
  templateUrl: './show.html',
  styleUrl: './show.css'
})
export class Show {
  /* TODO: Campos que serán mostrados del post */
  id = '';
  title = '';
  content = '';

  /* TODO: Inyectar servicio y ruta para cargar el post por id */
   constructor(private postService: PostService, private route: ActivatedRoute) {}

  /* TODO: Al inicializar, obtener el id de la ruta y cargar el post */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.findPost(Number(this.id)).subscribe((post: Post) => {
      this.title = post.title;
      this.content = post.content;
    });
  }
}
