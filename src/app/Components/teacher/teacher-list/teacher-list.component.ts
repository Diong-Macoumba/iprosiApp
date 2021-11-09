import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {Teacher} from "../../../model/teacher";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers!: Teacher[];
    MAN="MAN";
  WOMAN= "WOMAN";

  constructor(private teacherService: TeacherService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers() {
    this.teacherService.getTeachers().subscribe(data=>{
      this.teachers=data;
    },error => {console.log(error)})
  }

  detail(id: number) {
    this.router.navigate(['Teachers/details/'+id])
  }

  AddTeacher() {
    this.router.navigate(['Teachers/Add']);
  }

  update(id: number) {
    this.router.navigate(['Teachers/update/'+id]);
  }

  delete(id: number) {
    let v =confirm('Etes-vous sur?')
    if(v==true){
      this.teacherService.delete(id).subscribe(()=>
        this.goBack())
    }
  }

  goBack() {
    this.router.navigate(['/Teachers'])
    location.reload()

  }
}
