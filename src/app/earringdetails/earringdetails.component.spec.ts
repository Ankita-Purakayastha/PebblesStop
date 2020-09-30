import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarringdetailsComponent } from './earringdetails.component';

describe('EarringdetailsComponent', () => {
  let component: EarringdetailsComponent;
  let fixture: ComponentFixture<EarringdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarringdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarringdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
