import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyConfComponent } from './proxy-conf.component';

describe('ProxyConfComponent', () => {
  let component: ProxyConfComponent;
  let fixture: ComponentFixture<ProxyConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProxyConfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProxyConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
