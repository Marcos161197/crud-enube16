import { Teacher } from './../shared/teacher';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TeacherService {

  endpoint: string = 'http://localhost:8000/api/teacher';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  AddTeacher(data: Teacher): Observable<any> {
    let API_URL = `${this.endpoint}/add-teacher`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }


  getTeachers() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get teacher
  getTeacher(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-teacher/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Update student
  updateTeacher(id, data): Observable<any> {
    let API_URL = `${this.endpoint}/update-teacher/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete student
  deleteTeacher(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-teacher/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
