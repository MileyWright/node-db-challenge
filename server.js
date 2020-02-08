const express = require('express');

const ResourcesRouter = require('./Routes/resourcesRoutes');

const server = express();

server.use(express.json());
server.use('/resources', ResourcesRouter);

module.exports = server;
