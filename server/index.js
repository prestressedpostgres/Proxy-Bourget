// const nr = require('newrelic');
const express = require('express');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('../client'));


const port = 5000;

// server.get('./bundle.js/:3000', (req, res) => {
//   request('http://localhost:3000/bundle.js', (error, response, body) => {
//     res.status(200).send(body);
//   })
// })

server.get('/pg/restaurant/:id', function(req, res) {
  request(`http://localhost:4000/pg/restaurant/${req.body.id}`, (error, response, body) => {
    if (response.statusCode === 200) {
      res.status(200).send(body);
    }
  })
});

// server.get('./bundle.js/:8081', (req, res) => {
//   request('http://localhost:8081/bundle.js', (error, response, body) => {
//     res.status(200).send(body);
//   })
// })

// server.use('/api/cities', (req, res) => {
//   request(`http://localhost:8081/api/cities`, (error, response, body) => {
//     // console.log(body)
//     if (response.statusCode === 200) {
//       res.status(200).send(body);
//     }
//   })
// })

// server.use('/restaurant', (req, res) => {
//   console.log(req.query.name)
//   request(`http://localhost:8081/restaurant?name=${req.query.name}`, (error, response, body) => {
//     console.log(error)
//     if (response.statusCode === 200) {
//       // console.log(response)
//       res.status(200).send(body);
//     }
//   })
// })

server.listen(port, () => {
  console.log(`listening on port ${port}`);
})
