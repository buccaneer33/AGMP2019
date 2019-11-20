import { TestBed } from '@angular/core/testing';

import { AppEventService } from './app-event.service';

describe('AppEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppEventService = TestBed.get(AppEventService);
    expect(service).toBeTruthy();
  });
});
