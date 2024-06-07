import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() onCardHolder = new EventEmitter<string>();
  @Output() onCardNumber = new EventEmitter<string>();
  @Output() onMonth = new EventEmitter<string>();
  @Output() onYear = new EventEmitter<string>();
  @Output() onCvc = new EventEmitter<string>();

  @Output() onSubmit = new EventEmitter<void>();

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{4} \d{4} \d{4} \d{4}$/),
      Validators.minLength(19),
    ]),
    expDate: new FormGroup({
      month: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.pattern(/^\d{2}$/),
        this.monthValidator(),
      ]),
      year: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.pattern(/^\d{2}$/),
      ]),
    }),
    cvc: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{3}$/),
    ]),
  });

  onChangeCardholder(event: Event) {
    const inputEvent = event as InputEvent;
    const target = inputEvent.target as HTMLInputElement;
    this.onCardHolder.emit(target.value);
  }

  onChangeCardNumber(event: Event) {
    const inputEvent = event as InputEvent;
    const target = inputEvent.target as HTMLInputElement;
    let value = target.value.replace(/\s+/g, ''); // Remove todos os espaços
    let newValue = '';

    // Adiciona espaços após cada grupo de 4 dígitos
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        newValue += ' ';
      }

      newValue += value[i];
    }

    // Atualiza o valor do input e emite o novo valor formatado
    target.value = newValue;
    this.onCardNumber.emit(newValue);
  }

  onChangeMonth(event: Event) {
    const inputEvent = event as InputEvent;
    const target = inputEvent.target as HTMLInputElement;
    this.onMonth.emit(target.value);
  }

  onChangeYear(event: Event) {
    const inputEvent = event as InputEvent;
    const target = inputEvent.target as HTMLInputElement;
    this.onYear.emit(target.value);
  }

  onChangeCvc(event: Event) {
    const inputEvent = event as InputEvent;
    const target = inputEvent.target as HTMLInputElement;
    this.onCvc.emit(target.value);
  }

  onSubmitForm() {
    console.log(this.cardForm);
    if (this.cardForm.valid) {
      this.cardForm.reset();
      this.onSubmit.emit();
    }
  }

  monthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const month = Number(value);

      if (!value || isNaN(month) || month < 1 || month > 12) {
        return { invalidMonth: 'O mês deve estar entre 1 e 12.' };
      }

      return null;
    };
  }
}
