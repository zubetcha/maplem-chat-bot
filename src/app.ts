import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';

import type { Request, Response, NextFunction } from 'express';

import { messageRouter } from './routes/message';

dotenv.config();
// establish database connection
// myDataSource
//   .initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!');
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization:', err);
//   });

const app = express();
const PORT = process.env.PORT;

app.set('port', PORT || 8000);
app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});

app.use('/message', messageRouter);

export default app;
