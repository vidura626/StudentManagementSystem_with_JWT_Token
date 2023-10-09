import {UserDetailsInterface} from "./UserDetails.interface";

export interface AdminInterface {
  id: number;
  name: string;
  address: string;
  contact: string;
  userDetails: UserDetailsInterface;
}
