//require('dotenv').config();
const port = process.env.PORT || 4000;
const express = require('express');
const server = express();
const actionRouter = require('./routers/actionRouter.js');
const projectRouter = require('./routers/projectRouter.js');
const serverRouter = require('./server.js');

server.use(express.json());

server.use('/', serverRouter)
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.listen(port, () => console.log(`\nAPI RUNNING on port http://localhost:${port} \n`)); 