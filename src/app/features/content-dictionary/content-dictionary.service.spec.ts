import { TestBed } from '@angular/core/testing';
import { addMatchers, cold, initTestScheduler } from 'jasmine-marbles';

import { ContentDictionaryService } from './content-dictionary.service';

describe('ContentDictionaryService', () => {
  let service: ContentDictionaryService;

  beforeEach(() => {
    initTestScheduler();
    addMatchers();

    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return content', () => {
    expect(service.value()).toEqual({
      pages: { home: { title: 'Content Dictionary - Title', name: 'Content Dictionary - Name' } }
    });
  });

  it('should return observable', () => {
    const content = {
      x: {
        pages: { home: { title: 'Content Dictionary - Title', name: 'Content Dictionary - Name' } }
      }
    };
    const expected = cold('x', content);
    expect(service.content()).toBeObservable(expected);
  });
});
