const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const commentsHandler = require('./routes/comments');

const app = express();
const port = process.env.PORT || 5000;
const dbConnect = 'mongodb://panda:qwerty10@ds215093.mlab.com:15093/panda-comments';
mongoose.connect(dbConnect, { useNewUrlParser: true });

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes handlers
app.get('/api/comments', commentsHandler.get);
app.post('/api/comments', commentsHandler.post);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
