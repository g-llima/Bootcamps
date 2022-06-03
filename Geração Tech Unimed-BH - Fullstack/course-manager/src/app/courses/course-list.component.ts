import { Component, OnInit } from '@angular/core';
import { CourseService } from './course-service';
import { Course } from './courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];
  _filterBy: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
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
