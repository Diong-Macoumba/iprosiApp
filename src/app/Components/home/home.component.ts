import { Component, OnInit } from '@angular/core';
import {ClassroomService} from "../../service/classroom.service";
import {Classroom} from "../../model/classroom";
import {StudentService} from "../../service/student.service";
import {Student} from "../../model/student";
import {TeacherService} from "../../service/teacher.service";
import {Teacher} from "../../model/teacher";
import {CourseService} from "../../service/course.service";
import {Course} from "../../model/course";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  classrooms!: Classroom[];
  students !: Student[];
   teachers!: Teacher[];
   courses !: Course[];

  constructor(private classroomService: ClassroomService,
              private studentService: StudentService,
              private teacherService: TeacherService,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.classroomService.getAllClassroom().subscribe(data=>
      this.classrooms=data
    );
    this.studentService.getAllStudents().subscribe(data=>
    this.students=data);
    this.teacherService.getTeachers().subscribe(data=>
      this.teachers=data);
    this.courseService.getAllCourse().subscribe(data=>
    this.courses=data)
  }

}
