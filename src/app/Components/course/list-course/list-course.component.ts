import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../service/course.service";
import {Course} from "../../../model/course";
import {Teacher} from "../../../model/teacher";
import {Router} from "@angular/router";
import {workspaceRoot} from "@angular-devkit/build-angular/src/test-utils";

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses!: Course[]
  teacher: Teacher=new Teacher();
  constructor(private courseService : CourseService,
              private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getAllCourse().subscribe(data=>
    this.courses=data)
  }

  create() {
    this.router.navigate(['Courses/Add']);
  }

  update(id: number) {
    this.router.navigate(['Courses/update/'+id]);
  }

  delete(id: number) {
    let v = confirm("etes vous sûr?");
    if (v == true) {
      this.courseService.deleteCourse(id).subscribe(()=>
        this.goBack());
    }
  }
  goBack() {
    location.reload()
  }
}
