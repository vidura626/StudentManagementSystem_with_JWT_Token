import {TeacherInterface} from "../core/Teacher.interface";

export interface CourseView {
  id: number;
  name: string;
  description: string;
  fee: number;
  date: Date; // Assuming the date is represented as a string in "yyyy-MM-dd" format
  teacherName: string;
}
