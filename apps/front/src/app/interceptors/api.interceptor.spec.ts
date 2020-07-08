import { TestBed } from '@angular/core/testing';

import { ApiInterceptor } from './api.interceptor';

describe('ApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiInterceptor = TestBed.inject(ApiInterceptor);
    expect(interceptor).toBeTruthy();
  });

  /*
    this.http.get('/api/echo?init=true').subscribe(console.log, console.error);
    this.http.get('api/echo?init=true').subscribe(console.log, console.error);
    this.http.get('api').subscribe(console.log, console.error);
    this.http.get('apio').subscribe(console.log, console.error);
    this.http.get('/api').subscribe(console.log, console.error);
    this.http.get('/api/').subscribe(console.log, console.error);
    this.http.get('api/').subscribe(console.log, console.error);
  */
});
