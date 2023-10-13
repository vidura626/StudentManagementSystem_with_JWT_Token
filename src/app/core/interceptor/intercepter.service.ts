import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {User} from "../../shared/model/util/User";
import {Observable} from "rxjs";
import {getCookie} from "typescript-cookie";

@Injectable()
export class IntercepterService implements HttpInterceptor {
  user!: User;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }

    if (this.user && this.user.password && this.user.username) {
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.username + ':' + this.user.password));
    } else {
      let authToken = sessionStorage.getItem('Authorization');
      if (authToken) {
        httpHeaders = httpHeaders.append('Authorization', authToken);
      }
    }

    let s = getCookie("XSRF-TOKEN")!;
    sessionStorage.setItem("XSRF-TOKEN", s);
    let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    if (xsrf) {
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }

    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    return next.handle(req.clone(
      {
        headers: httpHeaders
      }
    ));
  }
}
