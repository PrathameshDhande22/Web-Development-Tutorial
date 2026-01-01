export interface BookFormInput {
  title: string;
  author: string;
  isbn?: string | null;
  publishedYear?: number | null;
  imgurl?: string | null;
}

export interface Book extends BookFormInput {
  id: number;
  createdAt: Date;
}

export interface BookList {
  books: Book[];
}

export interface BookListFailure {
  errormessage: string | null;
}

export interface RemoveBookProps {
  id: number;
}
