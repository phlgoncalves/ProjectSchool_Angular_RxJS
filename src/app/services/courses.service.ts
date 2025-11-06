import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, Observable, take, throwError } from 'rxjs';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseURL = `${environment.apiURL}courses`
  private http = inject(HttpClient);

  get(currentPage: number, pageSize: number, category: string, search: string): Observable<HttpResponse<any>> {
    let url = `${this.baseURL}?_page=${currentPage}&_limit=${pageSize}`

    if (category)
      url = `${url}&category=${category}`

    if (search)
      url = `${url}&q=${search}`
    return this.http.get<Course[]>(`${url}`, { observe: 'response' })
      .pipe(
        take(1),
        catchError(this.handleError)
      )
  }

  getById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}/${id}`)
      .pipe(
        take(1),
        catchError(this.handleError)
      )
  }

  post(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.baseURL}`, course)
      .pipe(
        take(1),
        catchError(this.handleError)
      )
  }

  put(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseURL}/${id}`, course)
      .pipe(
        take(1),
        catchError(this.handleError)
      )
  }

  delete(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`)
      .pipe(
        take(1),
        catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`
    } else {
      errorMessage = `Backend return code: ${err.status}:${err.message}`
    }
    console.log(err);
    return throwError(() => errorMessage)
  }
}
