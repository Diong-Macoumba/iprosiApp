import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classroom} from "../model/classroom";


@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private classroomUrl = 'http://localhost:8080/Classroom';
  constructor(private http: HttpClient) { }

  getAllClassroom():Observable<Classroom[]>{
    return this.http.get<Classroom[]>(`${this.classroomUrl}`);
  }
  create(classroom: Classroom):Observable<object>{
    return this.http.post(`${this.classroomUrl}`,classroom);
  }

}
