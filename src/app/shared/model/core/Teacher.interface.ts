import {AdminInterface} from "./Admin.interface";
import {UserDetailsInterface} from "./UserDetails.interface";

export interface TeacherInterface {
  id: number;
  name: string;
  address: string;
  contact: string;
  userDetails: UserDetailsInterface;
  admin?: AdminInterface; // Marked as optional because it's @JsonIgnore
  status: boolean;
}
