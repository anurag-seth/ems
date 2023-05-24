import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const sessionId = sessionStorage.getItem('sessionId');

    // Clone the request and add the session ID as a header
    if (sessionId) {
      request = request.clone({
        setHeaders: {
          'Authorization': sessionId
        }
      });
    }

    // Pass the modified request to the next interceptor or the backend
    return next.handle(request);
  }
}
