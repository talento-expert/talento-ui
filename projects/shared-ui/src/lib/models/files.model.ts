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
  