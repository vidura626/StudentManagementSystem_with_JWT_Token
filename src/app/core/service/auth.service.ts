import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_PATH_SERVICE} from "./api-path.service";
import {ApiPathInterface} from "../../shared/model/util/ApiPath.interface";
import {User} from "../../shared/model/util/User";
import {RolesInterface} from "../../shared/model/Roles.interface";
import {ResponseInterface} from "../../shared/model/util/Response.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogin = false;
  private http: HttpClient = inject(HttpClient);
  private apiPath: ApiPathInterface = inject(API_PATH_SERVICE);
  role!: RolesInterface;

  set setRole(role: RolesInterface) {
    this.role = role;
  }

  get getRole() {
    return this.role;
  }

  login(user: User) {
    window.sessionStorage.setItem("userdetails", JSON.stringify(user));
    return this.http.post<ResponseInterface>(this.apiPath.apiPath + 'user/login', null, {
      observe: "response",
      withCredentials: true
    });
  }

  set setLogin(value: boolean) {
    this.isLogin = value;
  }

  get getLogin() {
    return this.isLogin;
  }
}
