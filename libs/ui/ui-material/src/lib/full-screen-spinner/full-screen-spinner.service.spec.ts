import { TestBed } from '@angular/core/testing';

import { FullScreenSpinnerService } from './full-screen-spinner.service';

describe('FullScreenSpinnerService', () => {
  let service: FullScreenSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullScreenSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
