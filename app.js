const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/home', (req, res) => {
  res.sendFile('homepage.html', {root: path.join(__dirname, 'public')})
});

app.put('/home', (req, res) => {
  res.json({'good' : 'yep'})
});

app.listen(3000,() => console.log('Server running on port 3000'));
