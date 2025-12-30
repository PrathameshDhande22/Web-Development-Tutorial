import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { prisma } from './database';
import booksRouter from './routes/books';
import morgan from 'morgan';



const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"))
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Books and Users API',
    endpoints: {
      books: '/api/books'
    }
  });
});

app.use('/api/books', booksRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  server.close();
  process.exit(0);
});

export default app;
