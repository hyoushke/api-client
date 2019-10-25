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
export class QuestionsService {

  //private url = 'http://challenge.teespring.com/v1/question/practice';

  private url = 'https://randomuser.me/api/';
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

  getQuestions(): Observable<any> {

    console.log('start service');


    console.log(this.url);
    console.log(this.options);
    return this.http.get<any>(this.url, this.options);
  }

  getQuestionsRx(): Observable<any> {
    return this.http.get<any>(this.url, this.options);
  }


  postAnswers(data: any): Observable<any> {

    return this.http.post<any>(this.url, data, this.options);

  }


}
