import { ComponentFixture, TestBed } from '@angular/core/testing';

import { senderComponent } from './sender.component';

describe('senderComponent', () => {
  let component: senderComponent;
  let fixture: ComponentFixture<senderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ senderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(senderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
