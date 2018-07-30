const express = require('express');
const app = express();
const port = 9000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Coming Soon Page
app.get('/', (req, res) => {
  res.render('coming-soon/index.ejs');
});

// Temporary route for development
app.get('/dev', function (req, res) {
  res.render('index');
});


// Main Routes
/* // Home page
app.get('/', (req, res) => {
  res.render('index');
});
*/

// About
app.get('/about', function (req, res) {
  res.render('about');
});

// Contact
app.get('/contact', function (req, res) {
  res.render('contact');
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

app.listen(port, function () {
  console.log('App started on port', port);
});
