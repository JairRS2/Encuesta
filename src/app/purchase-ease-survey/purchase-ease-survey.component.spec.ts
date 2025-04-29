import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseEaseSurveyComponent } from './purchase-ease-survey.component';

describe('PurchaseEaseSurveyComponent', () => {
  let component: PurchaseEaseSurveyComponent;
  let fixture: ComponentFixture<PurchaseEaseSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseEaseSurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseEaseSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
