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

  title = '';
  content = '';
  error = '';

  constructor(private postService: PostService, private router: Router) {}

  submit(){
    if(!this.title || !this.content){
      this.error = ('Titulo y Contenido son obligatorios');
      return;
    }
    const input = {
      title: this.title,
      content: this.content,
      id: 1
    }


    this.postService.createPost(input).subscribe({});

    alert("Post creado correctamente");

    this.router.navigate(['/']);
  }
  
}
