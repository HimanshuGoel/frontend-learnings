import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomManipulationComponent } from './dom-manipulation.component';

describe('DomManipulationComponent', () => {
  let component: DomManipulationComponent;
  let fixture: ComponentFixture<DomManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomManipulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
