import { Component, OnInit } from '@angular/core';
import {CourseResponseDto} from "../../../dto/course-response-dto";
import {Teacher} from "../../../model/teacher";
import {CourseService} from "../../../service/course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TeacherService} from "../../../service/teacher.service";
import {Course} from "../../../model/course";

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: Course = new Course();
  courseDto=new CourseResponseDto();
  selectedOption: any;
  teachers !: Teacher[];
  id !: number
  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
    this.getTeachers();
    this.id=this.route.snapshot.params['id'];
    this.courseService.getCourseById(this.id).subscribe(course=>
    this.course=course)
  }

  onSubmit() {
  this.courseDto.teacherId=Number(this.selectedOption.id);
  this.courseDto.title=this.course.title;
  this.courseDto.year=this.course.year;
  this.courseService.updateCourse(this.id,this.courseDto).subscribe(()=>
  this.goBack())
  }

  getTeachers() {
    this.teacherService.getTeachers().subscribe(teachers=>
    this.teachers=teachers)
  }

  goBack() {
    this.router.navigate(['Courses']);
  }
}
