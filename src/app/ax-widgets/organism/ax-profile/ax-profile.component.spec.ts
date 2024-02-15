import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxProfileComponent } from './ax-profile.component';

describe('AxProfileComponent', () => {
  let component: AxProfileComponent;
  let fixture: ComponentFixture<AxProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxProfileComponent]
    });
    fixture = TestBed.createComponent(AxProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
