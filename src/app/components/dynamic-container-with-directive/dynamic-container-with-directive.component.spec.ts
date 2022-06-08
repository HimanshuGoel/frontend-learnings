import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContainerWithDirectiveComponent } from './dynamic-container-with-directive.component';

describe('DynamicContainerWithDirectiveComponent', () => {
  let component: DynamicContainerWithDirectiveComponent;
  let fixture: ComponentFixture<DynamicContainerWithDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicContainerWithDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicContainerWithDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
