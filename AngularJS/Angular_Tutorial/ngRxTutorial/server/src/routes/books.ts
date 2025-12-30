import { Router, Request, Response } from 'express';
import { prisma } from '../database';
import { CreateBookInput, UpdateBookInput, Book } from '../types';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const books: Book[] = await prisma.book.findMany();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const book: Book | null = await prisma.book.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, author, isbn, publishedYear, imgurl }: CreateBookInput = req.body;

    if (!title || !author) {
      return res.status(400).json({ error: 'Title and author are required' });
    }

    const book = await prisma.book.create({
      data: {
        title,
        author,
        isbn: isbn || null,
        publishedYear: publishedYear || null,
        ...(imgurl && { imgurl })
      }
    });

    res.status(201).json(book);
  } catch (error: any) {
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'ISBN already exists' });
    }
    res.status(500).json({ error: 'Failed to create book' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { title, author, isbn, publishedYear, imgurl }: UpdateBookInput = req.body;

    const book = await prisma.book.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ...(title && { title }),
        ...(author && { author }),
        ...(imgurl && { imgurl }),
        ...(isbn !== undefined && { isbn: isbn || null }),
        ...(publishedYear !== undefined && { publishedYear: publishedYear || null })
      }
    });

    res.json(book);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Book not found' });
    }
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'ISBN already exists' });
    }
    res.status(500).json({ error: 'Failed to update book' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await prisma.book.delete({
      where: { id: parseInt(req.params.id) }
    });

    res.status(204).send();
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

export default router;
