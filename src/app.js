/** @format */

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const postRouter = require('./routes/post');

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT;

// base url
app.get('/', (req, res) => {
  res.status(200).json({ data: 'Welcome To Blog Api' });
});

// versioning
app.use('/api/v1', postRouter);

app.listen(PORT, () => {
  console.log(`Server connected to http://localhost:${PORT}`);
});
