import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-upload-area',
  standalone: true,
  imports: [CommonModule, NzIconModule, NzSpinModule],
  templateUrl: './upload-area.component.html',
  styleUrl: './upload-area.component.less'
})
export class UploadAreaComponent {
  @Input() candidate!: AbstractControl;
  @Input() fileType: string = '';
  @Input() accept: string = '.pdf';
  @Input() required: boolean = true;
  @Input() maxFileNameLength: number = 20;
  @Input() index: number = 0;
  @Input() maxFileSize: number = 5 * 1024 * 1024; // 5MB in bytes
  @Input() allowMultiple: boolean = false;

  @Output() fileSelected = new EventEmitter<{ file: File; index: number; fileType: string }>();
  @Output() removeFile = new EventEmitter<{ index: number; fileType: string; fileIndex?: number }>();
  @Output() fileSizeError = new EventEmitter<{ message: string; index: number; fileType: string }>();

  constructor(private message: NzMessageService) {}
  /**
   * Safe cast from AbstractControl to FormGroup for template usage.
   */
  getAsFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  /**
   * Handle file selection and emit to parent
   */
  onLocalFileSelected(event: Event, index: number, fileType: string): void {
    const input = event.target as HTMLInputElement;

    if (this.allowMultiple && input.files) {
      // Handle multiple files
      const files = Array.from(input.files);

      for (const file of files) {
        // Validate file size
        if (file.size > this.maxFileSize) {
          const maxSizeMB = this.maxFileSize / (1024 * 1024);
          const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
          const errorMessage = `File size (${fileSizeMB}MB) exceeds the maximum allowed size of ${maxSizeMB}MB`;
          this.fileSizeError.emit({ message: errorMessage, index, fileType });
          this.message.error(errorMessage);

          continue;
        }

        this.fileSelected.emit({ file, index, fileType });
      }
    } else {
      // Handle single file
      const file = input.files?.[0];
      if (!file) return;

      // Validate file size
      if (file.size > this.maxFileSize) {
        const maxSizeMB = this.maxFileSize / (1024 * 1024);
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        const errorMessage = `File size (${fileSizeMB}MB) exceeds the maximum allowed size of ${maxSizeMB}MB`;
        this.fileSizeError.emit({ message: errorMessage, index, fileType });
        // Reset input so user can select another file
        input.value = '';
        this.message.error(errorMessage);

        return;
      }

      this.fileSelected.emit({ file, index, fileType });
    }

    // Reset input so same file can be selected again if needed
    input.value = '';
  }

  /**
   * Handle file removal and emit to parent
   */
  onRemoveFile(fileType: string, index: number, fileIndex?: number): void {
    this.removeFile.emit({ index, fileType, fileIndex });
  }

  /**
   * Get uploaded files as array
   */
  getUploadedFiles(): any[] {
    const value = this.getAsFormGroup(this.candidate).get(this.fileType)?.value;

    if (!value) return [];

    // If it's already an array, return it
    if (Array.isArray(value)) {
      return value;
    }

    // If it's a single file object, return it as an array
    return [value];
  }

  /**
   * Check if any files are uploaded
   */
  hasFiles(): boolean {
    const files = this.getUploadedFiles();
    return files.length > 0 && files.some(f => f?.name);
  }
}
