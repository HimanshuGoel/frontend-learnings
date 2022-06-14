import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContainerComponent } from './dynamic-container.component';

describe('DynamicContainerComponent', () => {
  let component: DynamicContainerComponent;
  let fixture: ComponentFixture<DynamicContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicContainerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
