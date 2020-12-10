const express = require('express');
const app = express();

// const httpProxy = require('http-proxy');
// const proxyServer = httpProxy.createProxyServer();

const port = 3000;

var cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(express.static('client/dist'));

var itemSelection = 'http://localhost:3001';
var alsoBought = 'http://localhost:3004';
var productDetails = 'http://localhost:5001';
var reviews = 'http://localhost:8000';

// get all the bundles

app.get('/bundles', (req, res) => {
  axios.get('http://localhost:3001/bundle.js')
    .then( (firstBundle) => {
      axios.get('http://localhost:3004/bundle.js')
        .then( (secondBundle) => {
          axios.get('http://localhost:8000/bundle.js')
           .then( (thirdBundle) => {
            //  axios.get('http://localhost:5001/bundle.js')
            //   .then( (fourthBundle) => {
        res.send(`${firstBundle.data}${secondBundle.data}${thirdBundle.data}`);
     //   })
      })
    })
  })
});




// app.get('/:id', (req, res) => {
//   var isbn = req.params.id;
//   console.log('req.params.id ', req.params.id);
//   res.send('hello world')
// });

app.listen(port, () => {

  console.log(`Listening on port ${port}`);
})