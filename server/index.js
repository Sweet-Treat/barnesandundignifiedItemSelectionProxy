const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(express.static('client/dist'));

app.get('/:id', (req, res) => {
  var isbn = req.params.id;
  console.log('req.params.id ', req.params.id);

  // trying to hit the service endpoint to serve the static assets
  axios({
    method: 'get',
    url: 'http://localhost:3001'
  })
    .then((data) => {
      res.send('test  ');
    })


  res.send(`'Looking to render the book with isbn: ${req.params.id}`);

});


app.listen(port, () => {

  console.log(`Listening on port ${port}`);
})