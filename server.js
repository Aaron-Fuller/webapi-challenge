const express = 'express';
const server = require('express').Router();
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>server.js is working</h2>`)
});

//custom middleware

function logger(req, res, next) {
  const method =req.method;
  const url =req.url;
  next();
};

module.exports = server;