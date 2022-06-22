import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreToPostBuildComponent } from './pre-to-post-build.component';

describe('PreToPostBuildComponent', () => {
  let component: PreToPostBuildComponent;
  let fixture: ComponentFixture<PreToPostBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreToPostBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreToPostBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
