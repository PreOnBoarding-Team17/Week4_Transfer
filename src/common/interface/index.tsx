interface FileInterface {
  key: string;
  name: string;
  size: number;
  thumbnailUrl: string;
}

interface SentInterface {
  subject: string;
  content: string;
  emails: string[];
}

interface DataInterface {
  count: number;
  created_at: number;
  download_count: number;
  expires_at: number;
  files: Array<FileInterface>;
  key: string | undefined;
  size: number;
  summary: string;
  thumbnailUrl: string;
  sent?: SentInterface;
}

export type { FileInterface, DataInterface };
