import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayViiiServicesComponent } from './day-viii-services.component';

describe('DayViiiServicesComponent', () => {
  let component: DayViiiServicesComponent;
  let fixture: ComponentFixture<DayViiiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayViiiServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayViiiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
