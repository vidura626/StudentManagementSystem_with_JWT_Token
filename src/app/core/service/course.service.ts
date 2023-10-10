import {Inject, Injectable} from '@angular/core';
import {CourseRequest} from "../../shared/model/rquestModels/Course.request";
import {HttpClient} from "@angular/common/http";
import {API_PATH_SERVICE} from "./api-path.service";
import {ApiPathInterface} from "../../shared/model/util/ApiPath.interface";
import {ResponseInterface} from "../../shared/model/util/Response.interface";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient,
              @Inject(API_PATH_SERVICE) private apiPath: ApiPathInterface) {
  }

  registerCourse(courseDetails: CourseRequest) {
    return this.http.post<ResponseInterface>(this.apiPath.apiPath + 'courses/register', courseDetails);
  }

  getAllCoursesWithPaginator(number: number, pageSize: number) {
    return this.http.get<ResponseInterface>(this.apiPath.apiPath + 'courses', {
      params: {
        number: number.toString(),
        pageSize: pageSize.toString()
      }
    });
  }

  deleteCourse(id: number) {
    return this.http.delete<ResponseInterface>(this.apiPath.apiPath + 'courses/' + id);
  }

  updateCourse(course: CourseRequest) {
    return this.http.put<ResponseInterface>(this.apiPath.apiPath + 'courses/', course, {
      params: {
        id: course.id.toString(),
      }
    });
  }

  getCourse(courseID: number | undefined) {
    return this.http.get<ResponseInterface>(this.apiPath.apiPath + 'course/get/' + courseID);
  }

  getAllCourses() {
    return this.http.get<ResponseInterface>(this.apiPath.apiPath + 'course/getall');
  }
}
