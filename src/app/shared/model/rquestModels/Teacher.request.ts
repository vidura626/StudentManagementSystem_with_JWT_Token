export interface TeacherRequest {
  id: number;
  name: string;
  address: string;
  contact: string;
  username: string;
  adminId: number | null; // Assuming adminId can be null
  status: boolean;
}
