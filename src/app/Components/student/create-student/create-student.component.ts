import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {ClassroomService} from "../../../service/classroom.service";
import {Classroom} from "../../../model/classroom";
import {StudentResponseDto} from "../../../dto/student-response-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
   classrooms!: Classroom[];
   student = new StudentResponseDto();
  selectedOption: any = {};
  genders: string[]=['MAN','WOMAN'];
  selectedOptionGender: any={};

  constructor(private studentService: StudentService,
              private classroomService:  ClassroomService,
              private router: Router) { }

  ngOnInit(): void {
  this.getAllClass();
  }

  getAllClass() {
    this.classroomService.getAllClassroom().subscribe(data=>{
      this.classrooms=data;
    })
  }



  Onsubmit() {
    this.student.classroomId = Number(this.selectedOption.id);
    this.student.gender=this.selectedOptionGender;
    this.studentService.createStudent(this.student).subscribe(()=>

      this.goBack()
    )

  }

  goBack() {
    this.router.navigate(['/Students'])
  }
}
