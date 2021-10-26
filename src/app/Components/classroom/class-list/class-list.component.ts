import { Component, OnInit } from '@angular/core';
import {ClassroomService} from "../../../service/classroom.service";
import {Classroom} from "../../../model/classroom";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classrooms!: Classroom[];

  constructor(private classroomService: ClassroomService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllClass();
  }

  private getAllClass() {
    this.classroomService.getAllClassroom().subscribe(data => {
      this.classrooms = data;
    })
  }

  edit(id: number) {
    this.router.navigate(['Classes/update/' + id])
  }
}

