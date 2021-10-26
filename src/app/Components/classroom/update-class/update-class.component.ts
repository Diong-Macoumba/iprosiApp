import { Component, OnInit } from '@angular/core';
import {ClassroomService} from "../../../service/classroom.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Classroom} from "../../../model/classroom";

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {
  id !: number;
   classroom: Classroom = new Classroom();
  constructor(private classroomService : ClassroomService,
              private route : ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.classroomService.getClassroomById(this.id).subscribe(data=>{
      this.classroom=data;
    })
  }

  OnSubmit() {
    this.classroomService.updateClassroom(this.id,this.classroom).subscribe(()=>
    this.goBack());
  }

   goBack() {
     this.router.navigate(['/Classes'])
  }
}
