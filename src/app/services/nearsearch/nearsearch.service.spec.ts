import { TestBed, inject } from '@angular/core/testing';

import { NearsearchService } from './nearsearch.service';

describe('NearsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NearsearchService]
    });
  });

  it('should be created', inject([NearsearchService], (service: NearsearchService) => {
    expect(service).toBeTruthy();
  }));
});
