import {TeacherInterface} from "./Teacher.interface";

export interface CourseInterface {
  id: number;
  name: string;
  description: string;
  fee: number;
  modifiedDate: Date; // Assuming the date is represented as a string in "yyyy-MM-dd" format
  createdDate: Date; // Assuming the date is represented as a string in "yyyy-MM-dd" format
  teacherID: TeacherInterface;
}
