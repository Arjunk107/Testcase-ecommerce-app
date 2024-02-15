import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxCardComponent } from './ax-card.component';

describe('AxCardComponent', () => {
  let component: AxCardComponent;
  let fixture: ComponentFixture<AxCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxCardComponent]
    });
    fixture = TestBed.createComponent(AxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
