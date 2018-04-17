import { TestBed, inject } from '@angular/core/testing';

import { GglPlaceCompService } from './ggl-place-comp.service';

describe('GglPlaceCompService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GglPlaceCompService]
    });
  });

  it('should be created', inject([GglPlaceCompService], (service: GglPlaceCompService) => {
    expect(service).toBeTruthy();
  }));
});
