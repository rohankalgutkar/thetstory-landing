const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
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

app.get('/index-ref', function (req, res) {
  res.render('index-ref');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
