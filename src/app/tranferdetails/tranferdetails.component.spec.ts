import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferdetailsComponent } from './tranferdetails.component';

describe('TranferdetailsComponent', () => {
  let component: TranferdetailsComponent;
  let fixture: ComponentFixture<TranferdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranferdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
