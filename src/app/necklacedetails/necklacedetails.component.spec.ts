import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklacedetailsComponent } from './necklacedetails.component';

describe('NecklacedetailsComponent', () => {
  let component: NecklacedetailsComponent;
  let fixture: ComponentFixture<NecklacedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecklacedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecklacedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
