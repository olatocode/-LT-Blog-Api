const express = require("express");
const { allPost, addPost, getAPost, updatePost } = require("../controllers/post");
const router = express.Router();


router.get("/posts", allPost);
router.post("/posts", addPost)
router.get('/posts/:id', getAPost);
router.put('/posts/:id', updatePost);



module.exports = router;