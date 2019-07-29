import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private readonly URL = "https://jsonplaceholder.typicode.com/posts"

  constructor(
    protected httpClient: HttpClient,
  ) {}

/*    public create(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.URL, hero);
  }

  public delete(hero: Hero): Observable<Hero> {
    return this.httpClient.delete<Hero>(`${this.URL}/${hero._id}`);
  } 

  public get(id: string): Observable<Hero> {
      
    return this.httpClient.get<Hero>(`${this.URL}/${id}`);
  } */
  
 
  public list(): Observable<Array<Object>> {
    return this.httpClient.get<Array<Object>>(this.URL);
  }
/* 
  public update(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(`${this.URL}/${hero._id}`, hero);
  }
   */
  ngOnInit() {
  }
 
}
