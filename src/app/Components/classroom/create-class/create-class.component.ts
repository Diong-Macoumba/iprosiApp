import { Component, OnInit } from '@angular/core';
import {Classroom} from "../../../model/classroom";
import {ClassroomService} from "../../../service/classroom.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  classroom: Classroom = new Classroom();

  constructor(private classroomService : ClassroomService,
              private router : Router) { }

  ngOnInit(): void {
  }

  OnSubmit() {
    this.classroomService.create(this.classroom).subscribe(()=>{
      this.goBack();
    })
  }

  goBack() {
    this.router.navigate(['/Classes'])
  }
}
