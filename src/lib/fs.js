/** @format */

const fs = require('fs');
const path = require('path');

// Define the path to the JSON file
const dataPath = path.join(__dirname, 'posts.json');

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

app.post('/posts', (req, res) => {
  // const { title, content } = req.body;
  const title = req.body;
  const content = req.body;

  const newPost = {
    id: posts.length + 1,
    title: title,
    content: content,
  };

  console.log(newPost.title);
  posts.push(newPost);

  // Write updated posts array back to file
  fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));

  return res.status(201).json({
    message: 'post created successfully',
    data: newPost,
  });
});
