/** @format */

const { posts, Post } = require('../models/postModel');

// view all posts logic/endpoint
const allPost = (req, res) => {
  return res.status(200).json({ data: posts });
};

const addPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post(posts.length + 1, title, content);
  posts.push(newPost);
  res.status(201).json({ success: true, data: newPost });
};

module.exports = {
  allPost,
  addPost,
};
