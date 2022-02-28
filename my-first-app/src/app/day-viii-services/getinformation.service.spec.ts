import { TestBed } from '@angular/core/testing';

import { GetinformationService } from './getinformation.service';

describe('GetinformationService', () => {
  let service: GetinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
