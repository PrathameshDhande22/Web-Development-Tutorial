export interface Book {
  id: number;
  createdAt: Date;
  title: string;
  author: string;
  isbn?: string | null;
  publishedYear?: number | null;
  imgurl?: string | null;
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
