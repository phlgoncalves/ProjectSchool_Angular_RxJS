import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Category, Course } from '../../../shared/models/course';
import { CoursesService } from '../../../services/courses.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { catchError, debounceTime, EMPTY, Observable, tap } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  courseList: Course[] = [];
  private courseService = inject(CoursesService);
  private fb = inject(FormBuilder);
  categoryValue = Object.values(Category);
  form!: FormGroup;
  courseData!: Observable<any>;
  private snackBar = inject(MatSnackBar);


  totalCount: number = 0;
  currentPage: number = 1;
  pageSize: number = 5;

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: ['']
    });
  }

  get f(): any {
    return this.form.controls
  }

  ngOnInit(): void {
    this.validation();

    this.form.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((value) => {
      if (value) {
        this.getCourses(
          this.currentPage,
          this.pageSize,
          this.f.category.value ?? '',
          this.f.search.value ?? ''
        );
      }
    });
    this.getCourses(1, 5, '', '');
  }

  doSearch(): void {
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }

  getCourses(currentPage: number, pageSize: number, category: string, search: string): void {
    this.courseData = this.courseService
      .get(currentPage, pageSize, category, search)
      .pipe(
        tap((response: HttpResponse<any>) => {
          this.courseList = response.body as Course[];
          let totalCount = response.headers.get('X-Total-Count');
          this.totalCount = totalCount ? Number(totalCount) : 0;
        }),
        catchError((err: string) => {
          this.snackBar.open(err, 'Close', {
            duration: 4000
          });
          return EMPTY;
        })
      )
  }

  handlePageEvent(e: PageEvent): void {
    this.currentPage = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }
}
