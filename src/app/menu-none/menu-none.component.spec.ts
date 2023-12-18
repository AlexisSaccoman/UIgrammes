import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNoneComponent } from './menu-none.component';

describe('MenuNoneComponent', () => {
  let component: MenuNoneComponent;
  let fixture: ComponentFixture<MenuNoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNoneComponent]
    });
    fixture = TestBed.createComponent(MenuNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
