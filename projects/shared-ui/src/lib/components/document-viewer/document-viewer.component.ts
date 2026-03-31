import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule ,provideNzIconsPatch } from 'ng-zorro-antd/icon';
import {
  DeleteOutline,
  DownloadOutline,
  EyeOutline,
  FileAddOutline,
  UploadOutline
} from '@ant-design/icons-angular/icons';

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
  selector: 'app-document-viewer',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule
  ],
  providers: [
    ...provideNzIconsPatch([
      EyeOutline,
      DownloadOutline,
      DeleteOutline,
      FileAddOutline,
      UploadOutline
    ])
  ],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.less'
})
export class DocumentViewerComponent {
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canRead: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() documentSections: DocumentSection[] = [];
  @Input() showSectionHeaders: boolean = true;
  @Input() uploadPlaceholderText: string = 'No files uploaded';
  @Output() onUpload = new EventEmitter<string>();
  @Output() onDownload = new EventEmitter<DocumentFile>();
  @Output() onView = new EventEmitter<DocumentFile>();
  @Output() onRemove = new EventEmitter<number>();

  public getDocumentDisplayName(document: DocumentFile): string {
    return document.fileType.replace('_', ' ').toLowerCase();
  }

  public getDocumentSubtitle(document: DocumentFile): string {
    const lastUpdate = this.getTimeAgo(document.updatedAt);
    return `Last Update ${lastUpdate}`;
  }

  private getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  public uploadFile(sectionType: string): void {
    this.onUpload.emit(sectionType);
    console.log('uploadFile', sectionType);
  }

  public viewFile(doc: DocumentFile): void {
    if (doc.fileUrl) {
      window.open(doc.fileUrl, '_blank');
    }
    this.onView.emit(doc);
  }

  public downloadFile(doc: DocumentFile): void {
    this.onDownload.emit(doc);
  }

  public removeFile(fileId: number): void {
    this.onRemove.emit(fileId);
  }
}
