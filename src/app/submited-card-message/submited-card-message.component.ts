import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-submited-card-message',
  standalone: true,
  imports: [],
  templateUrl: './submited-card-message.component.html',
  styleUrl: './submited-card-message.component.css',
})
export class SubmitedCardMessageComponent {
  @Output() onContinue = new EventEmitter<void>();
  @Output() onReset = new EventEmitter<void>();

  continue() {
    this.onReset.emit();
    this.onContinue.emit();
  }
}
