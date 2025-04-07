/** @format */
const { dataPath, fs } = require('../database/posts');
const { Post, posts } = require('../models/postModel');
// view all posts logic/endpoint
const allPost = (req, res) => {
  try {
    return res.status(200).json({
      status: 'success',
      message: 'All posts view successfully',
      data: posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

const addPost = (req, res) => {
  try {
    const { title, content } = req.body;

    // create a new post
    const newPost = new Post(posts.length + 1, title, content);
    posts.push(newPost);
    
    // Write updated posts array back to file
    fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));
    res.status(201).json({
      status: 'success',
      message: 'Posts created successfully',
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getAPost = (req, res) => {
  try {
    const post = posts.find((m) => m.id === parseInt(req.params.id));

    if (!post) {
      res.status(404).json({ status: 'error', message: 'Post not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Post view successfully',
      data: post,
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

const updatePost = (req, res) => {
  try {
     const post = posts.find((r) => r.id === parseInt(req.params.id));
     if (!post)
       return res
         .status(404)
         .json({ status: 'error', message: 'Post not found' });

     const { title, content } = req.body;
     if (title) post.title = title;
     if (content) post.content = content;

     res.status(200).json({
       status: 'success',
       message: 'Post updated successfully',
     });
  } catch (error) {
     return res.status(500).json({ status: 'error', message: error.message });
  }
 
};

const deletePost = (req, res) => {
 try {
   const post = posts.findIndex((m) => m.id === parseInt(req.params.id));
   if (!post)
     return res
       .status(404)
       .json({ status: 'error', message: 'post not found' });

   posts.splice(post, 1);
   res
     .status(204)
     .json({ status: 'success', message: 'Post deleted successfully' });
 } catch (error) {
   return res.status(500).json({ status: 'error', message: error.message });
 }
};

module.exports = {
  allPost,
  addPost,
  getAPost,
  updatePost,
  deletePost,
};
