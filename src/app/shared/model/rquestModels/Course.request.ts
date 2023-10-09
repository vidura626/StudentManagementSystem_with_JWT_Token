export interface CourseRequest {
  id: number;
  name: string;
  description: string;
  fee: number;
  modifiedDate: string; // Assuming the date is represented as a string in "yyyy-MM-dd" format
  teacherID: number;
}
