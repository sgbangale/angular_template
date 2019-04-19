import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationMenuComponent } from './operation-menu.component';

describe('OperationMenuComponent', () => {
  let component: OperationMenuComponent;
  let fixture: ComponentFixture<OperationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
