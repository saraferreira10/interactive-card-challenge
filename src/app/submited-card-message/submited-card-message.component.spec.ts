import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitedCardMessageComponent } from './submited-card-message.component';

describe('SubmitedCardMessageComponent', () => {
  let component: SubmitedCardMessageComponent;
  let fixture: ComponentFixture<SubmitedCardMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitedCardMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitedCardMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
