import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = request.url;

    if (this.isApiCall(url)) {
      const cloned = this.getRedirectRequestWithHeaders(request);
      return next.handle(cloned);
    }
    return next.handle(request);
  }

  private getRedirectRequestWithHeaders(
    request: HttpRequest<any>
  ): HttpRequest<any> {
    return request.clone({
      url: this.getNewUrl(request.url),
    });
  }

  private getNewUrl(url: string): string {
    const regex = /^[/]?api/;
    let newUrl = url.replace(regex, environment.apiUrl);
    const hostname = window.location.hostname;

    if (!environment.production && hostname !== 'localhost') {
      // Allow local network use
      newUrl = newUrl.replace('localhost', hostname);
    }

    return newUrl;
  }

  private isApiCall(url: string): boolean {
    const regex = /^[/]?api([/].*)?$/gi;
    return regex.test(url);
  }
}
