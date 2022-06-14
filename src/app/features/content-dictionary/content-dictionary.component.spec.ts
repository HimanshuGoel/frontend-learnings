import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDictionaryComponent } from './content-dictionary.component';

describe('ContentDictionaryComponent', () => {
  let component: ContentDictionaryComponent;
  let fixture: ComponentFixture<ContentDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentDictionaryComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Content Dictionary - Title');
  });
});
