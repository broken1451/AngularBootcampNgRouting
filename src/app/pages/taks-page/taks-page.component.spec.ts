import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksPageComponent } from './taks-page.component';

describe('TaksPageComponent', () => {
  let component: TaksPageComponent;
  let fixture: ComponentFixture<TaksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
