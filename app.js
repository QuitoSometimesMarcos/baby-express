const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer  = require('multer');

const app = express();
const publicFolder = path.join(__dirname, 'public');
const uploadFolder = path.join(publicFolder, 'uploads');

const fileFilter = (req, file, cb) => {
  // Accept image file types only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder)
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage, fileFilter })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicFolder));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/home', (req, res) => {
  res.sendFile('homepage.html', {root: publicFolder })
});

app.get('/upload-profile-picture', (req, res) => {
  res.sendFile('upload_profile_picture.html', {root: publicFolder })
});

app.post('/upload-profile-picture', upload.single('profile_pic'), (req, res) => {
  const { file, fileValidationError } = req
  if (!file) {
    return res.status(400).send('Please upload a file');
  }
  console.log(file)
  res.send(`<div>You have uploaded this image: <br/> <img src="http://localhost:3000/uploads/${req.file.filename}" width="500" /></div>`);
})


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
  console.log(JSON.stringify(req.body));
  res.json(req.body)
});

app.get('/number/:id', (req, res) => {
  res.send(`The number is ${req.params.id}`)
})
app.listen(3000,() => console.log('Server running on port 3000'));
