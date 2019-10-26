import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IQuestion } from 'src/app/models/question.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  //private url = 'http://localhost:8080/posts/500/1/1/test';
  private url = 'http://localhost:8080';
  private headers = new HttpHeaders()
                        .set('Content-Type', 'application/json')
                        .set('Auth-Token', '9ec804cb-182e-471a-a0ad-d42ed385a7af')
                        .set('Accept', 'application/json');
  private options = {
    headers: this.headers
  };


  constructor(private http: HttpClient ) { }

  /*
  errorHandler(error: HttpErrorResponse) {

    return Observable.throw(error.message);

  }
  */

  getPosts(pageLimit: number, pageNumber: number, searchField: string, searchKeyword: string): Observable<any> {

    console.log('start service');


    const url = this.url + '/posts/' + pageLimit + '/' + pageNumber + '/' + searchField + '/' + searchKeyword;
    console.log(url);
    return this.http.get<any>(url, this.options);
  }

  addPosts(posts: any): Observable<any> {
    console.log('start service');


    const url = this.url + '/posts/';
    console.log(url);
    console.log(posts);
    return this.http.post<any>(url, posts,  {headers: new HttpHeaders({'Content-Type':  'application/json'})});
  }


  updatePosts(posts: any): Observable<any> {
    console.log('start service');


    const url = this.url + '/posts/';
    console.log(url);
    console.log(posts);
    return this.http.patch<any>(url, posts,  {headers: new HttpHeaders({'Content-Type':  'application/json'})});
  }

  /*
  deletePosts(posts: any): Observable<any> {
    console.log('start service');


    const url = this.url + '/posts/';
    console.log(url);
    console.log(posts);
    return this.http.delete<any>(url, '1');
  }
  */



}
