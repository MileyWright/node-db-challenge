const express = require('express');

const ProjectRouter = require('./Routes/orojectRoutes');

const server = express();

server.use(express.json());
server.use('/project', ProjectRouter);

module.exports = server;
