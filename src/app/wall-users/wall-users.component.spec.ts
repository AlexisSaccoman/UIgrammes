import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallUsersComponent } from './wall-users.component';

describe('WallUsersComponent', () => {
  let component: WallUsersComponent;
  let fixture: ComponentFixture<WallUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallUsersComponent]
    });
    fixture = TestBed.createComponent(WallUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
