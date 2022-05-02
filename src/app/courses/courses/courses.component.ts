import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: "1", name: 'Angular', category: 'Frontend' }
  ];
  displayedColumns = ['name','category'];

  constructor() {}

  ngOnInit(): void {
  }

}
