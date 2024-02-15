import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxHomeComponent } from './ax-home.component';

describe('AxHomeComponent', () => {
  let component: AxHomeComponent;
  let fixture: ComponentFixture<AxHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxHomeComponent]
    });
    fixture = TestBed.createComponent(AxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
