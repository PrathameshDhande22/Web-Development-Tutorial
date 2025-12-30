export interface CreateBookInput extends BookInput {

}

export interface BookInput {
  title: string;
  author: string;
  isbn?: string | null;
  publishedYear?: number | null;
  imgurl?: string | null
}

export interface UpdateBookInput extends BookInput {

}

export interface Book extends BookInput {
  id: number
  createdAt: Date
}
