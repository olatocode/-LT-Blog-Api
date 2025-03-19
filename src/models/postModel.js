/** @format */

const posts = require('../database/posts');

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

module.exports = { posts, Post };
