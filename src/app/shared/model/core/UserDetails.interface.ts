export interface UserDetailsInterface {
  id: number;
  userName: string;
  pwd?: string; // Marked as optional because of WRITE_ONLY
}
