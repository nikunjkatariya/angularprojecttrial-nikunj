import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDataRequestComponent } from './http-data-request.component';

describe('HttpDataRequestComponent', () => {
  let component: HttpDataRequestComponent;
  let fixture: ComponentFixture<HttpDataRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpDataRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDataRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
