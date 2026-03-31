import { Component , Input } from '@angular/core';
import { NzIconModule ,provideNzIconsPatch } from 'ng-zorro-antd/icon';
import { InboxOutline } from '@ant-design/icons-angular/icons';
// import {}

@Component({
  selector: 'app-status-empty',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './status-empty.component.html',
  styleUrl: './status-empty.component.less',
  providers: [...provideNzIconsPatch([InboxOutline])]
})
export class StatusEmptyComponent {
    @Input() message: string = '';
}
