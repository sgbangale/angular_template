import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAccessListComponent } from './entity-access-list.component';

describe('EntityAccessListComponent', () => {
  let component: EntityAccessListComponent;
  let fixture: ComponentFixture<EntityAccessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityAccessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityAccessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
