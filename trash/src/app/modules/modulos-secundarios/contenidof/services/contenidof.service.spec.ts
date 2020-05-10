import { TestBed } from '@angular/core/testing';

import { ContenidofService } from './contenidof.service';

describe('ContenidofService', () => {
  let service: ContenidofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenidofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
