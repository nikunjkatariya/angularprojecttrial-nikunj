import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7ngClassComponent } from './day7ng-class.component';

describe('Day7ngClassComponent', () => {
  let component: Day7ngClassComponent;
  let fixture: ComponentFixture<Day7ngClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day7ngClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7ngClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
