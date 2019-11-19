import { TestBed } from '@angular/core/testing';

import { CourceService } from './cource.service';

describe('CourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourceService = TestBed.get(CourceService);
    expect(service).toBeTruthy();
  });
});
