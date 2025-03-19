const express = require("express");
const { allPost, addPost } = require("../controllers/post");
const router = express.Router();


router.get("/posts", allPost);
router.post("/posts", addPost)


module.exports = router;