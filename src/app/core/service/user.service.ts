import {Inject, Injectable} from '@angular/core';
import {UserInfoRequest} from "../../shared/model/rquestModels/UserInfo.request";
import {HttpClient} from "@angular/common/http";
import {API_PATH_SERVICE} from "./api-path.service";
import {ApiPathInterface} from "../../shared/model/util/ApiPath.interface";
import {ResponseInterface} from "../../shared/model/util/Response.interface";
import {RolesInterface} from "../../shared/model/Roles.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              @Inject(API_PATH_SERVICE) private apiPath: ApiPathInterface) {
  }

  registerUser(regUserInfo: UserInfoRequest) {
    return this.http.post<ResponseInterface>(this.apiPath.apiPath + 'users/register', regUserInfo);
  }

  roles: RolesInterface[] = [
    {
      value: 'student',
      roleName: 'Student'
    },
    {
      value: 'teacher',
      roleName: 'Teacher'
    },
    {
      value: 'admin',
      roleName: 'Admin'
    }
  ];

  public getRoles() {
    return this.roles;
  }
}
