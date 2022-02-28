import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedatachangeComponent } from './servicedatachange.component';

describe('ServicedatachangeComponent', () => {
  let component: ServicedatachangeComponent;
  let fixture: ComponentFixture<ServicedatachangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicedatachangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedatachangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
