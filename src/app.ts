import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import path from 'path';
import express from 'express';

export const app = express();



//const __dirname = dirname(fileURLToPath(import.meta.url));
const __dirname = path.resolve();

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});
