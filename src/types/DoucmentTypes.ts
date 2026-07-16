export type DocumentType = "pdf" | "doc" | "csv" | "mov";

export interface File {
  type: DocumentType;
  name: string;
  added: string;
}

export interface Folder {
  type: "folder";
  name: string;
  files: Item[];
}

export type Item = File | Folder;
