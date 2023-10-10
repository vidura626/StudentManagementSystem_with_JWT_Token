import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {User} from "../../shared/model/util/User";
import {Observable} from "rxjs";

@Injectable()
export class IntercepterService implements HttpInterceptor {
  user!: User;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpHeaders = new HttpHeaders();
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }

    if (this.user && this.user.password && this.user.username) {
      httpHeaders = req.headers.append('Authorization', 'Basic ' + window.btoa(this.user.username + ':' + this.user.password));
      sessionStorage.removeItem("userdetails");
    } else {
      let authToken = sessionStorage.getItem('Authorization');
      if (authToken) {
        httpHeaders = req.headers.append('Authorization', authToken);
      }
    }

    let xsrf = sessionStorage.getItem('XSRF-TOKEN')!;
    if (xsrf) {
      httpHeaders = req.headers.append('X-XSRF-TOKEN', xsrf);
    }

    return next.handle(req.clone({
      headers: httpHeaders
    }));
  }
}
