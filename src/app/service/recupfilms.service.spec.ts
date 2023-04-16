import { TestBed } from '@angular/core/testing';

import { RecupfilmsService } from './recupfilms.service';

describe('RecupfilmsService', () => {
  let service: RecupfilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecupfilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
