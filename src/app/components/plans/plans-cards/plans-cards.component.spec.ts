import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansCardsComponent } from './plans-cards.component';

describe('PlansCardsComponent', () => {
  let component: PlansCardsComponent;
  let fixture: ComponentFixture<PlansCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlansCardsComponent]
    });
    fixture = TestBed.createComponent(PlansCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
