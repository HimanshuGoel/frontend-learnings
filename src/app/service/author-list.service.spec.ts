import { TestBed } from '@angular/core/testing';

import { AuthorListService } from './author-list.service';

describe('AuthorListService', () => {
  let service: AuthorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
