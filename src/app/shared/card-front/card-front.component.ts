import { Component, Input } from '@angular/core';
import { Form } from '../../model/form';

@Component({
  selector: 'app-card-front',
  standalone: true,
  imports: [],
  templateUrl: './card-front.component.html',
  styleUrl: './card-front.component.css',
})
export class CardFrontComponent {
  @Input({required: true})
  form: Form = {};
}
