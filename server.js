const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home page (Currenctly coming-soon)
app.get('/', (req, res) => {
  res.render('coming-soon/index.ejs');
});

app.get('/dev', function (req, res) {
  res.render('index');
});

app.get('/about-us', function (req, res) {
  res.render('about-us');
});

app.get('/privacy-policy', function (req, res) {
  res.render('privacy-policy');
});

app.get('/products', function (req, res) {
  res.render('products');
});

app.get('/services', function (req, res) {
  res.render('services');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/blog', function (req, res) {
  res.render('blog');
});

app.get('/blog-post-1', function (req, res) {
  res.render('blog-post-1');
});

// Temp
app.get('/index-ref', function (req, res) {
  res.render('index-ref');
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
});
