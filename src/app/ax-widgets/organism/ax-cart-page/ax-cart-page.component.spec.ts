import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxCartPageComponent } from './ax-cart-page.component';

describe('AxCartPageComponent', () => {
  let component: AxCartPageComponent;
  let fixture: ComponentFixture<AxCartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxCartPageComponent]
    });
    fixture = TestBed.createComponent(AxCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
