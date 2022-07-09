import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHeadersInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    alert('interceptor has been called');
    const userEmailId = localStorage.getItem('userEmailId') || '';
    return next.handle(httpRequest.clone({ setHeaders: { 'xms-user-email-id': userEmailId } }));
  }
}
