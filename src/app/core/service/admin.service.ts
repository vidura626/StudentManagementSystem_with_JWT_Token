import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiPathInterface} from "../../shared/model/util/ApiPath.interface";
import {API_PATH_SERVICE} from "./api-path.service";
import {ResponseInterface} from "../../shared/model/util/Response.interface";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,
              @Inject(API_PATH_SERVICE) private apiPath: ApiPathInterface) {
  }

  getAllAdmins() {
    return this.http.get<ResponseInterface>(this.apiPath.apiPath + 'admin/getall');
  }
}
