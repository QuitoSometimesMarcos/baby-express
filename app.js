const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/home', (req, res) => {
  res.sendFile('homepage.html', {root: path.join(__dirname, 'public')})
});

app.put('/home', (req, res) => {
  res.json({'good' : 'yep'})
});

app.get('/test-ejs', (req, res) => {
  res.render('test', { title: 'Hey'})
});

app.get('/test-ejs2', (req, res) => {
  res.render('test2', {title: 'Hey Page', users: ['Bob', 'John', 'Jane']})
});

app.get('/test-ejs3', (req, res) => {
  res.render('test3', {title: 'Form Page'})
});

app.post('/test-ejs3', (req, res) => {
  console.log(req.body);
  res.json(req.body)
});

app.get('/number/:id', (req, res) => {
  res.send(`The number is ${req.params.id}`)
})
app.listen(3000,() => console.log('Server running on port 3000'));
