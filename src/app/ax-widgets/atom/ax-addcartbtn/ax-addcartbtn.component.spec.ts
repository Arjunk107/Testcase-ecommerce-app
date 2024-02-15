import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxAddcartbtnComponent } from './ax-addcartbtn.component';

describe('AxAddcartbtnComponent', () => {
  let component: AxAddcartbtnComponent;
  let fixture: ComponentFixture<AxAddcartbtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxAddcartbtnComponent]
    });
    fixture = TestBed.createComponent(AxAddcartbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
