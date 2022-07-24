import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomContactComponent } from './random-contact.component';

describe('RandomContactComponent', () => {
  let component: RandomContactComponent;
  let fixture: ComponentFixture<RandomContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
