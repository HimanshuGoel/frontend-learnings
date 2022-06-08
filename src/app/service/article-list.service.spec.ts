import { TestBed } from '@angular/core/testing';

import { ArticleListService } from './article-list.service';

describe('ArticleListService', () => {
  let service: ArticleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
