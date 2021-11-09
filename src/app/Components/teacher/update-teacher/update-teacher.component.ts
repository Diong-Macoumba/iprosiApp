import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TeacherResponseDto} from "../../../dto/teacher-response-dto";
import {Teacher} from "../../../model/teacher";

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
 id !: number;
  teacherDto: TeacherResponseDto=new TeacherResponseDto();
  selectedOptionGender: any;
  genders: string[] = ['MAN','WOMAN'];
   teacher!: Teacher;
  constructor(private teacherService: TeacherService,
              private route : ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.teacherService.getTeacherById(this.id).subscribe(data=>{
      this.teacher=data;
    })
  }

  onSubmit() {
  this.teacherDto.firstName=this.teacher.firstName;
  this.teacherDto.lastName=this.teacher.lastName;
  this.teacherDto.address=this.teacher.address;
  this.teacherDto.email=this.teacher.email;
  this.teacherDto.phone=this.teacher.phone;
  this.teacherDto.gender=this.teacher.gender;
  this.teacherService.update(this.teacherDto,this.id).subscribe(()=>
  this.goBack())
  }

   goBack() {
    this.router.navigate(['/Teachers'])
  }
}
