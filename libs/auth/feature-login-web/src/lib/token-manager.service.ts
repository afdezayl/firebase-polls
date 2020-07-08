import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestDTO } from '@polls/auth/shared-auth-interfaces';

@Injectable({
  providedIn: 'root',
})
export class TokenManagerService {
  constructor(private http: HttpClient) {}

  sendTokenToServer(request: LoginRequestDTO) {
    return this.http.post('/api/auth/login', request);
  }
}
