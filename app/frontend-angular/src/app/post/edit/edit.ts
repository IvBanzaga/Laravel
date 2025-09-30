import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostService } from '../post-service';
import { Post } from '../post';

@Component({
  selector: 'app-edit',
  imports: [RouterModule, FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
  id = '';
  title = '';
  content = '';
  error = '';

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.findPost(Number(this.id)).subscribe((post: Post) => {
      this.title = post.title;
      this.content = post.content;
    });
  }

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

    this.postService.updatePost(Number(this.id), input).subscribe(() => {
      alert('Post actualizado correctamente');
      this.router.navigate(['/']);
    });
  } 
}
