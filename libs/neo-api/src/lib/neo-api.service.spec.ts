import { TestBed } from '@angular/core/testing';

import { NeoApiService } from './neo-api.service';

describe('NeoApiService', () => {
  let service: NeoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
