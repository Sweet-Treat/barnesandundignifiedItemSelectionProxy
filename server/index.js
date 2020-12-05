const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

// var httpProxy = require('http-proxy');
// var proxy = httpProxy.createProxyServer();
// const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors());
// var itemSelection = 'http://localhost:3001';
// var product = 'http://localhost:5001';
// var reviews = 'http://localhost:8000';
// var carousel = 'http://localhost:3004';

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

