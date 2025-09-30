import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  deletePost(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    /* TODO: Obtener todos los posts desde la API */
    return this.http.get<Post[]>(this.apiUrl + '/posts');
  }

  createPost(data: Post): Observable<Post> {
    /* TODO: Crear un nuevo post en la API */
    return this.http.post<Post>(this.apiUrl + '/posts', data);
  }

  findPost(id: number): Observable<Post> {
    /* TODO: Obtener un post por su id */
    return this.http.get<Post>(this.apiUrl + '/posts/' + id);
  }

  updatePost(id: number, data: Post): Observable<Post> {
    /* TODO: Actualizar un post existente */
    return this.http.put<Post>(this.apiUrl + '/posts/' + id, data);
  }

  deletePostById(id: number): Observable<any> {
    /* TODO: Eliminar un post por id */
    return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  }
}
