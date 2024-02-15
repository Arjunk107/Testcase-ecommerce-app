import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxFooterComponent } from './ax-footer.component';

describe('AxFooterComponent', () => {
  let component: AxFooterComponent;
  let fixture: ComponentFixture<AxFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxFooterComponent]
    });
    fixture = TestBed.createComponent(AxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
