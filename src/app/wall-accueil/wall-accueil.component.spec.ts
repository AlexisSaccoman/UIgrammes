import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallAccueilComponent } from './wall-accueil.component';

describe('WallAccueilComponent', () => {
  let component: WallAccueilComponent;
  let fixture: ComponentFixture<WallAccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallAccueilComponent]
    });
    fixture = TestBed.createComponent(WallAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
