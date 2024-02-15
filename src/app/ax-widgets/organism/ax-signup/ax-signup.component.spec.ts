import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxSignupComponent } from './ax-signup.component';

describe('AxSignupComponent', () => {
  let component: AxSignupComponent;
  let fixture: ComponentFixture<AxSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxSignupComponent]
    });
    fixture = TestBed.createComponent(AxSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
