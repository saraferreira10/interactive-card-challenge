import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './shared/form/form.component';
import { CardFrontComponent } from './shared/card-front/card-front.component';
import { CardBackComponent } from './shared/card-back/card-back.component';
import { Form } from './model/form';
import { CommonModule } from '@angular/common';
import { SubmitedCardMessageComponent } from './submited-card-message/submited-card-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardFrontComponent,
    CardBackComponent,
    FormComponent,
    CommonModule,
    SubmitedCardMessageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private initialValues = [
    'Jane Applesed',
    '0000 0000 0000 0000',
    '00',
    '00',
    '000',
  ];

  showForm: boolean = true;

  form: Form = {
    cardHolder: this.initialValues[0],
    cardNumber: this.initialValues[1],
    expDate: { month: this.initialValues[2], year: this.initialValues[3] },
    cvc: this.initialValues[4],
  };

  setCardHolder(cardHolder: string): void {
    this.form.cardHolder = cardHolder;
  }

  setCardNumber(cardNumber: string): void {
    this.form.cardNumber = cardNumber;
  }

  setMonth(month: string): void {
    this.form.expDate!.month = month;
  }

  setYear(year: string): void {
    this.form.expDate!.year = year;
  }

  setCvc(cvc: string): void {
    this.form.cvc = cvc;
  }

  toggleShowForm() {
    this.showForm = !this.showForm;
  }

  resetValues() {
    this.form = {
      cardHolder: this.initialValues[0],
      cardNumber: this.initialValues[1],
      expDate: { month: this.initialValues[2], year: this.initialValues[3] },
      cvc: this.initialValues[4],
    };
  }
}
