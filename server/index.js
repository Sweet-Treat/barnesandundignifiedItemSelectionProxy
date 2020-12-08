const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

app.use(cors());
app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})