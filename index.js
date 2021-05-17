const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = process.env.port || 3000;

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

router.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

app.use('/', router);

app.use('*', (req, res, next) => {
  res.status(404).send('<h1>404 Page Not Found</h1> ¯_(ツ)_/¯');
});

app.listen(port, () => {
  console.log('Up and running!');
});
