// Create web server
// npm install express
const express = require('express');
const app = express();
// npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const comments = [];
app.get('/comments', (req, res) => {
  res.json(comments);
});
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json(comments);
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Start web server
// node comments.js
// Test web server
// curl http://localhost:3000/comments
// curl -X POST -d "comment=hello" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=world" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=goodbye" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=moon" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=star" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=planet" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=earth" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=sun" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=mercury" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=venus" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=mars" http://localhost:3000/comments
// curl http://localhost:3000/comments
// curl -X POST -d "comment=jupiter" http://localhost:3000/comments
// curl http://localhost