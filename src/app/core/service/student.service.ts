import {inject, Injectable} from '@angular/core';
import {API_PATH_SERVICE} from "./api-path.service";
import {ApiPathInterface} from "../../shared/model/util/ApiPath.interface";
import {HttpClient} from "@angular/common/http";
import {UserInfoRequest} from "../../shared/model/rquestModels/UserInfo.request";
import {ResponseInterface} from "../../shared/model/util/Response.interface";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiPath: ApiPathInterface = inject(API_PATH_SERVICE);
  private http = inject(HttpClient);

  public getAllStudentsWithPaginator(pageIndex: number, pageSize: number) {
    return this.http.get<ResponseInterface>(this.apiPath.apiPath + 'students', {
      params: {
        number: pageIndex.toString(),
        pageSize: pageSize.toString()
      }
    });
  }

  public deleteStudent(id: number) {
    return this.http.delete<ResponseInterface>(this.apiPath.apiPath + 'students/' + id);
  }

  public updateStudent(student: UserInfoRequest) {
    return this.http.put<ResponseInterface>(this.apiPath.apiPath + 'students/', student);
  }

  public getStudent(id: number) {
    return this.http.get<ResponseInterface>(this.apiPath.apiPath + 'students/' + id);
  }
}
