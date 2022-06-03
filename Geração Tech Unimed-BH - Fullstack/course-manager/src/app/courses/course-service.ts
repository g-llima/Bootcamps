import { Injectable } from '@angular/core';
import { Course } from './courses';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  retrieveAll(): Course[] {
    return COURSES;
  }
}

let COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: Forms',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    price: 99.99,
    code: 'XPS-8796',
    duration: 120,
    rating: 4.5,
    releaseDate: 'November, 2, 2019',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Angular: HTTP',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    price: 45.99,
    code: 'LKR-1094',
    duration: 80,
    rating: 4,
    releaseDate: 'August, 4, 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
