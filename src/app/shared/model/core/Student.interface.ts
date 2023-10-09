import {UserDetailsInterface} from "./UserDetails.interface";

export interface StudentInterface {
  id: number;
  name: string;
  address: string;
  contact: string;
  userDetails: UserDetailsInterface;
}
