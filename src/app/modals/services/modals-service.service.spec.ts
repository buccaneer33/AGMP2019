import { TestBed } from '@angular/core/testing';

import { ModalsServiceService } from './modals-service.service';

describe('ModalsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalsServiceService = TestBed.get(ModalsServiceService);
    expect(service).toBeTruthy();
  });
});
