import { TestBed } from '@angular/core/testing';

import { DynamicContainerShareService } from './dynamic-container-share.service';

describe('DynamicContainerShareService', () => {
  let service: DynamicContainerShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicContainerShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
