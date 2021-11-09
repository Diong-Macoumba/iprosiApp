import {Course} from "./course";
import {Student} from "./student";

export class Exam {
  id!: number;
  mark!: number;
  examDate!: string;
  examType!: string;
  course!: Course;
  student!: Student;
}
