import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxCartCardComponent } from './ax-cart-card.component';

describe('AxCartCardComponent', () => {
  let component: AxCartCardComponent;
  let fixture: ComponentFixture<AxCartCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxCartCardComponent]
    });
    fixture = TestBed.createComponent(AxCartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
