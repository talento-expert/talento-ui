import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared-ui/src/public-api';
import {StatusEmptyComponent} from '../../../shared-ui/src/public-api';
import {DocumentViewerComponent} from '../../../shared-ui/src/public-api';

export interface DocumentFile {
  id: number;
  originalName: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
  createdAt: string;
  updatedAt: string;
  employeeId: number;
  documentType: string;
}

export interface DocumentSection {
  type: string;
  displayName: string;
  files: DocumentFile[];
  hasFiles: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, StatusEmptyComponent , DocumentViewerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Talento Shared UI Demo';

  onButtonClick(event: Event) {
    console.log('Button clicked!', event);
    alert('Button clicked!');
  }
  documentSections: DocumentSection[] = [
    {
      type: 'document',
      displayName: 'Document',
      files: [
        {
          id: 1,
          originalName: 'Document.pdf',
          fileName: 'Document.pdf',
          fileUrl: 'https://www.google.com',
          fileType: 'pdf',
          fileSize: 100,
          createdAt: '2021-01-01',
          updatedAt: '2021-01-01',
          employeeId: 1,
          documentType: 'document'
        } ,
      ],
      hasFiles: true
    }
  ];
}
