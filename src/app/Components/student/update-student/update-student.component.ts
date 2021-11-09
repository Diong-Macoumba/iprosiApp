import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Classroom} from "../../../model/classroom";
import {ClassroomService} from "../../../service/classroom.service";
import {StudentResponseDto} from "../../../dto/student-response-dto";
import {Student} from "../../../model/student";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
studentDto= new StudentResponseDto();

   id!: number;
  selectedOption: any;
  classrooms!: Classroom[];
  student =new Student();
  constructor(private studentService : StudentService,
              private route: ActivatedRoute,
              private classroomService: ClassroomService,
              private router: Router) { }

  ngOnInit(): void {
    this.classroomService.getAllClassroom().subscribe(data=>
    this.classrooms=data);
   this.id= this.route.snapshot.params['id'];
   this.studentService.getStudentById(this.id).subscribe(data=>{
     this.student=data;
   })
  }

  Onsubmit() {
    this.studentDto.classroomId = Number(this.selectedOption.id);
    this.studentDto.gender= this.student.gender;
    this.studentDto.firstName=this.student.firstName;
    this.studentDto.lastName=this.student.lastName;
    this.studentDto.address=this.student.address;
    this.studentDto.dateOfBirth=this.student.dateOfBirth;
    this.studentDto.parentFirstName=this.student.parentFirstName;
    this.studentDto.parentLastName=this.student.parentLastName;
    this.studentDto.parentPhone=this.student.parentPhone;
      this.studentService.updateStudent(this.studentDto,this.id).subscribe(()=>
      this.goBack());
  }

  private goBack() {
    this.router.navigate(['Students'])
  }
}
