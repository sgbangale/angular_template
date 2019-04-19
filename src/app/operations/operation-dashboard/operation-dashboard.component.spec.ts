import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDashboardComponent } from './operation-dashboard.component';

describe('OperationDashboardComponent', () => {
  let component: OperationDashboardComponent;
  let fixture: ComponentFixture<OperationDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
