import {Classroom} from "./classroom";

export class Student {
  id !: number;
  firstName !: string;
  lastName !: string;
  parentFirstName !: string;
  parentLastName !: string;
  parentPhone !: string;
  dateOfBirth !: Date;
  gender !: string;
  address !: string;
  classroom !: Classroom;

}
