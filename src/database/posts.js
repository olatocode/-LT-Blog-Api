/** @format */

const fs = require('fs');
const path = require('path');

// Define the path to the JSON file
const dataPath = path.join(__dirname, '../database/posts.json');

// Initialize posts array
let posts = [];

// Load existing posts from file if it exists
try {
  const fileData = fs.readFileSync(dataPath, 'utf8');
  posts = JSON.parse(fileData);
} catch (error) {
  // If file doesn't exist or is invalid, initialize with sample data
  posts = [
    {
      id: 1,
      title: 'Nodejs',
      content: 'Im a backend dev',
    },
  ];
  // Create the file with initial data
  fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));
}


module.exports = {fs, dataPath, posts}