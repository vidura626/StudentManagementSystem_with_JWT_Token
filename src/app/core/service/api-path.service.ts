import {InjectionToken} from "@angular/core";
import {ApiPathInterface} from "../../shared/model/util/ApiPath.interface";
import {environment} from "../../../environments/environment";

export const API_PATH_SERVICE = new InjectionToken<ApiPathInterface>('apiPath');

export const API_PATH: ApiPathInterface = {
  apiPath: environment.apiEndPoint
}
