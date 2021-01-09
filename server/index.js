const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
var cors = require('cors');

app.use(cors());
app.use(express.static('client/dist'));

var itemSelectionURL = 'http://18.188.228.195:3001';
var productDetailsURL = 'http://3.16.221.35:5001';
var reviewsURL = 'http://3.140.58.207:8000';
var alsoBoughtURL = 'http://54.183.241.255:3004'

// item selection
app.get('/product/:isbn/formats', (req, res) => {
  axios.get(`${itemSelectionURL}/product/${req.params.isbn}/formats`)
    .then((response)=> {
      res.status(200).send(response.data);
    })
    .catch((error)=> {
      res.status(500).send(error);
    });
});

// product details
app.get('/products/:isbn', (req, res) => {
  axios.get(`${productDetailsURL}/products/${req.params.isbn}`)
    .then((response)=> {
      res.status(200).send(response.data);
    })
    .catch((error)=> {
      res.status(500).send(error);
    });
});

// author details
app.get('/author/:author', (req, res) => {
  axios.get(`${productDetailsURL}/author/${req.params.author}`)
  .then((response)=> {
      res.status(200).send(response.data);
    })
    .catch((error)=> {
      res.status(500).send(error);
    });
});

// publisher details
app.get('/publisher', (req, res) => {
  axios.get(`${productDetailsURL}/publisher`)
   .then ((response) => {
    res.status(200).send(response.data);
   })
   .catch((error)=> {
      res.status(500).send(error);
    });
});

// product series
app.get('/series', (req, res) => {
  axios.get(`${productDetailsURL}/series`)
   .then ((response) => {
    res.status(200).send(response.data);
   })
   .catch((error)=> {
      res.status(500).send(error);
    });
});

// books category
app.get('/category/:bookCategory', (req, res) => {
  axios.get(`${productDetailsURL}/category/${req.params.bookCategory}`)
  .then ((response) => {
    res.status(200).send(response.data);
   })
   .catch((error)=> {
      res.status(500).send(error);
    });
});

// reviews service - getting reviews
app.get('/books/:identifier/reviews', (req, res) => {
  axios.get(`${reviewsURL}/books/${req.params.identifier}/reviews`)
  .then((response)=> {
    res.status(200).send(response.data);
  })
  .catch((error)=> {
    res.status(500).send(error);
  });

});

// reviews servicev - getting reviews summary
app.get('/books/:identifier/reviews/summary', (req, res) => {
  axios.get(`${reviewsURL}/books/${req.params.identifier}/reviews/summary`)
  .then((response)=> {
    res.status(200).send(response.data);
  })
  .catch((error)=> {
    res.status(500).send(error);
  });
});

// reviews service - update review
app.put('/books/:identifier/review/:id', (req, res) => {
  axios.put(`${reviewsURL}/books/${req.params.identifier}/review/${req.params.id}`, req.body)
  .then((response)=> {
    res.status(200).send(response.data);
  })
  .catch((error)=> {
    res.status(500).send(error);
  });

});

// also bought service
app.get('/products/:rootIsbn/alsoBought', (req, res) => {
  axios.get(`${alsoBoughtURL}/products/${req.params.rootIsbn}/alsoBought`)
  .then((response)=> {
    res.status(200).send(response.data);
  })
  .catch((error)=> {
    res.status(500).send(error);
  });
});




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})