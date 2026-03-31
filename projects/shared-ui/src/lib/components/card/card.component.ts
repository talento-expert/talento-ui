import { Component, Input } from '@angular/core';
// import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less'
})
export class CardComponent {
  @Input() value: string | number | null = 0;
  @Input() count: string | number | null = 0;
  @Input() icon: string = '';
  @Input() title: string = '';

}
