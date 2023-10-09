export interface StudentInterface {
  id: number;
  name: string;
  description: string;
  fee: number;
  modifiedDate: Date; // Assuming the date is represented as a string in "yyyy-MM-dd" format
  teacherID: number;
}
