import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'default';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'talento-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class ButtonComponent {
  @Input() type: ButtonType = 'default';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;
  
  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }

  get buttonClasses(): string {
    return [
      'talento-button',
      `talento-button--${this.type}`,
      `talento-button--${this.size}`,
      this.disabled ? 'talento-button--disabled' : '',
      this.loading ? 'talento-button--loading' : '',
      this.fullWidth ? 'talento-button--full-width' : ''
    ].filter(Boolean).join(' ');
  }
}
