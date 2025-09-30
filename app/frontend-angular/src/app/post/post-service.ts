import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + '/posts');
  }

  createPost(data: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + '/posts', data);
  }

  findPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + '/posts/' + id);
  }

  updatePost(id: number, data: Post): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + '/posts/' + id, data);
  }
}
