import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {TeacherResponseDto} from "../../../dto/teacher-response-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  genders: string[]=['MAN', 'WOMAN'];
  selectedOptionGender: any;
  teacherDto=new TeacherResponseDto()
  constructor(private teacherService : TeacherService,
              private router : Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.teacherService.create(this.teacherDto).subscribe(()=>
      this.goBack())
  }

   goBack() {
    this.router.navigate(['/Teachers'])
  }
}
