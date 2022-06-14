import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomStructuralManipulationComponent } from './dom-structural-manipulation.component';

describe('DomStructuralManipulationComponent', () => {
  let component: DomStructuralManipulationComponent;
  let fixture: ComponentFixture<DomStructuralManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomStructuralManipulationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DomStructuralManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
