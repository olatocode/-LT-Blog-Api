/** @format */

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const postRouter = require("./routes/post")

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;


// base url
app.get('/', (req, res) => {
  res.status(200).json({ data: 'Welcome To Blog Api' });
  console.log(req.method);
});

app.use("/api/v1", postRouter)

app.listen(PORT, () => {
  console.log(`Blog is running on http://localhost:${PORT}`);
});
