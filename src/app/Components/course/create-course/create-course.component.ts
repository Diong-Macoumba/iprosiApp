import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../service/course.service";
import {TeacherService} from "../../../service/teacher.service";
import {Teacher} from "../../../model/teacher";
import {CourseResponseDto} from "../../../dto/course-response-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
   teachers!: Teacher[];
  teacher!: Teacher;
  course=new CourseResponseDto();
  selectedOption: any={}

  constructor(private courseService: CourseService,
              private teacherService : TeacherService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  onSubmit() {
    this.course.teacherId=Number(this.selectedOption.id)
    this.courseService.createCourse(this.course).subscribe(()=>
      this.goBack()

    );

  }

  getAllTeachers() {
    this.teacherService.getTeachers().subscribe(data=>{
      this.teachers=data;
    })
  }

  goBack() {
    this.router.navigate(['/Courses']);
  }
}
