/** @format */

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

const post = [
  {
    id: 1,
    title: 'Leraning express',
    content: 'Im a Backend dev',
  },
  {
    id: 2,
    title: 'Learning express',
    content: 'Im a Backend dev',
  },
  {
    id: 3,
    title: 'Learning nodejs',
    content: 'Im a Backend dev',
  },
  {
    id: 4,
    title: 'Learning html',
    content: 'Im a Backend dev',
  },
];

//base url
app.get('/', (req, res) => {
  res.status(200).json({ data: 'Welcome To Blog Api' });
  console.log(req.method);
});


// view all post logic/endpoint
app.get('/posts', (req, res) => {
  res.status(200).json({ data: post });
});

// create a new logic



app.listen(PORT, () => {
  console.log(`Blog is running on http://localhost:${PORT}`);
});
