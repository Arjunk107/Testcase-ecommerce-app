import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxLoginComponent } from './ax-login.component';

describe('AxLoginComponent', () => {
  let component: AxLoginComponent;
  let fixture: ComponentFixture<AxLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxLoginComponent]
    });
    fixture = TestBed.createComponent(AxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
