import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseURL = `${environment.apiURL}courses`
  private http = inject(HttpClient);

  get(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseURL}`)
  }

  getById(id: number): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseURL}/${id}`)
  }

  post(course: Course): Observable<Course[]>{
    return this.http.post<Course[]>(`${this.baseURL}`, course)
  }

  put(id: number, course: Course): Observable<Course[]>{
    return this.http.put<Course[]>(`${this.baseURL}/${id}`, course)
  }

  delete(id: number): Observable<Course[]>{
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`)
  }
}
