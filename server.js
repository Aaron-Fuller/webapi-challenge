const express = 'express';
const server = require('express').Router();
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>server.js is working</h2>`)
});

//custom middleware


module.exports = server;