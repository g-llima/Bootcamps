import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course-service';
import { Course } from '../courses';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseSerivce: CourseService
  ) {}

  ngOnInit(): void {
    this.course = this.courseSerivce.retrieveById(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    );
  }

  save(): void {
    this.courseSerivce.save(this.course);
  }
}
