import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingdetailsComponent } from './ringdetails.component';

describe('RingdetailsComponent', () => {
  let component: RingdetailsComponent;
  let fixture: ComponentFixture<RingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
