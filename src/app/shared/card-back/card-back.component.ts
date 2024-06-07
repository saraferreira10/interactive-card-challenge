import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-back',
  standalone: true,
  imports: [],
  templateUrl: './card-back.component.html',
  styleUrl: './card-back.component.css',
})
export class CardBackComponent {
  @Input({ required: true })
  cvcNumber: string | undefined = '';
}
