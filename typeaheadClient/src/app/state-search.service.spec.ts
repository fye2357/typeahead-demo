import { TestBed } from '@angular/core/testing';

import { StateSearchService } from './state-search.service';

describe('StateSearchService', () => {
  let service: StateSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
