export interface CreateUserInput {
  name: string;
  email: string;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
}

export interface CreateBookInput {
  title: string;
  author: string;
  isbn?: string;
  publishedYear?: number;
  userId?: number;
}

export interface UpdateBookInput {
  title?: string;
  author?: string;
  isbn?: string;
  publishedYear?: number;
  userId?: number;
}
