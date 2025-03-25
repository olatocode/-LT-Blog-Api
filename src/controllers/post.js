/** @format */

const { posts, Post } = require('../models/postModel');
// view all posts logic/endpoint
const allPost = (req, res) => {
  try {
    return res.status(200).json({ data: posts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};



const addPost = (req, res) => {
  try {
    const { title, content } = req.body;

    // validating data property
    // if (!title || !content) {
    //   return res.status(400).json({ message: 'Bad request' });
    // }
      
    // create a new post
    const newPost = new Post(posts.length + 1, title, content);
    posts.push(newPost);
    res.status(201).json({
      status: 'success',
      message: 'posts created successfully',
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAPost = (req, res) => {
  try {
    const post = posts.find((m) => m.id === parseInt(req.params.id));

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: 'Post not found' });
    }

    return res.status(200).json({ success: true, data: post });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updatePost = (req, res) => {
  const post = posts.find((r) => r.id === parseInt(req.params.id));
  if (!post)
    return res.status(404).json({ success: false, message: 'Post not found' });

  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;

  res.status(200).json({ success: true, data: post });
};

const deletePost = (req, res) => {
  const post = posts.findIndex((m) => m.id === parseInt(req.params.id));
  if (!post)
    return res.status(404).json({ success: false, message: 'post not found' });

  posts.splice(post, 1);
  res.status(200).json({ success: true, message: 'post deleted successfully' });
};

module.exports = {
  allPost,
  addPost,
  getAPost,
  updatePost,
  deletePost
};
