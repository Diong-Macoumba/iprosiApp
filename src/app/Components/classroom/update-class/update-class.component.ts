import { Component, OnInit } from '@angular/core';
import {ClassroomService} from "../../../service/classroom.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit {
  id !: number;
  constructor(private classroomService : ClassroomService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

  }

}
