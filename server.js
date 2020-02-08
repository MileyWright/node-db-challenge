const express = require('express');

// const ProjectRouter = require('./Routes/projectRoute');

const server = express();

server.use(express.json());
// server.use('/project', ProjectRouter);

module.exports = server;
