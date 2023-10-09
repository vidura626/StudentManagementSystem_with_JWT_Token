import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(username: string, password: string) {
    // Perform login logic here (e.g., send data to the server)
  }
}
