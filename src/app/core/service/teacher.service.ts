import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiPathInterface} from "../../shared/model/util/ApiPath.interface";
import {API_PATH_SERVICE} from "./api-path.service";
import {ResponseInterface} from "../../shared/model/util/Response.interface";
import {TeacherRequest} from "../../shared/model/rquestModels/Teacher.request";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient,
              @Inject(API_PATH_SERVICE) private apiPath: ApiPathInterface) {
  }

  public registerTeacher(teacherRequest: TeacherRequest) {
    return this.http.post<ResponseInterface>(this.apiPath.apiPath + 'teachers/register', teacherRequest);
  }

  public getAllTeachersWithPaginator(number: number, pageSize: number) {
    return this.http.get<ResponseInterface>(this.apiPath.apiPath + 'teachers', {
      params: {
        number: number.toString(),
        pageSize: pageSize.toString()
      }
    });
  }

  public deleteTeacher(id: number) {
    return this.http.delete<ResponseInterface>(this.apiPath.apiPath + 'teachers/' + id);
  }

  public updateTeacher(teacher: TeacherRequest) {
    return this.http.put<ResponseInterface>(this.apiPath.apiPath + 'teachers/', teacher, {
      params: {
        id: teacher.id.toString(),
      }
    });
  }

  public getTeacher(teacherID: number) {
    return this.http.get<ResponseInterface>(this.apiPath.apiPath + 'teachers/' + teacherID);
  }

  getAllTeachers() {
    return this.http.get<ResponseInterface>(this.apiPath.apiPath + 'teacher/getall', {
      responseType: 'json',
      observe: 'body',
      reportProgress: true
    });
  }
}
