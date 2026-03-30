import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared-ui/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Talento Shared UI Demo';

  onButtonClick(event: Event) {
    console.log('Button clicked!', event);
    alert('Button clicked!');
  }
}
