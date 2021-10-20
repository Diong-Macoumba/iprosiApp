import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../../model/student";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id!: number;
  student!: Student;
  constructor(private studentService : StudentService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data=>
    this.student=data)
    console.log(this.student)
  }

  goBack() {
    this.router.navigate(['/Students']);
  }
}
