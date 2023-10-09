import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {

  }

  getLoginStatus(): boolean {
    return true;
  }

  getLoginRole(): string {
    return 'teacher';
  }
}
