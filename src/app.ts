import { join } from 'node:path';
import path from 'path';
import express from 'express';

export const app = express();

app.use(express.static(path.join(__dirname, "..", "public")))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});