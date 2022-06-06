import { Component, OnInit } from '@angular/core';
import { CourseService } from './course-service';
import { Course } from './courses';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[];

  _courses: Course[];
  _filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.retrieveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: (err) => console.log('Erro: ' + err),
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((x: Course) =>
      x.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  get filter() {
    return this._filterBy;
  }
}
