import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxNavbarComponent } from './ax-navbar.component';

describe('AxNavbarComponent', () => {
  let component: AxNavbarComponent;
  let fixture: ComponentFixture<AxNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxNavbarComponent]
    });
    fixture = TestBed.createComponent(AxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
