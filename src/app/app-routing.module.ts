import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {StudentInfoComponent} from "./Components/student/student-info/student-info.component";
import {ClassListComponent} from "./Components/classroom/class-list/class-list.component";
import {CreateStudentComponent} from "./Components/student/create-student/create-student.component";
import {CreateClassComponent} from "./Components/classroom/create-class/create-class.component";
import {StudentDetailsComponent} from "./Components/student/student-details/student-details.component";
import {UpdateClassComponent} from "./Components/classroom/update-class/update-class.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'Students', component : StudentInfoComponent},
  {path: 'Students/Add', component: CreateStudentComponent},
  {path: 'Students/details/:id', component: StudentDetailsComponent},
  {path: 'Classes' , component: ClassListComponent},
  {path: 'Classes/update/:id' , component: UpdateClassComponent},
  {path: 'Classes/Add', component: CreateClassComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
