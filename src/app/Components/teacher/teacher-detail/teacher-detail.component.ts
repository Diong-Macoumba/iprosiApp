import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {ActivatedRoute} from "@angular/router";
import {Teacher} from "../../../model/teacher";

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  id!: number;
  teacher: Teacher= new Teacher();
  MAN="MAN";
  WOMAN= "WOMAN";
  constructor(private teacherService: TeacherService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.teacherService.getTeacherById(this.id).subscribe(data=>{
      this.teacher=data;
    })
  }

}
