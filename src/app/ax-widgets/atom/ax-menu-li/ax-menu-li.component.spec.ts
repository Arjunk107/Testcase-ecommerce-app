import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxMenuLiComponent } from './ax-menu-li.component';

describe('AxMenuLiComponent', () => {
  let component: AxMenuLiComponent;
  let fixture: ComponentFixture<AxMenuLiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxMenuLiComponent]
    });
    fixture = TestBed.createComponent(AxMenuLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
