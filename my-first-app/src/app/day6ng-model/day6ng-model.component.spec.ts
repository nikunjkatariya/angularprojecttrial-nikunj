import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6ngModelComponent } from './day6ng-model.component';

describe('Day6ngModelComponent', () => {
  let component: Day6ngModelComponent;
  let fixture: ComponentFixture<Day6ngModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6ngModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6ngModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
