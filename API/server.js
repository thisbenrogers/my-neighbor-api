const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const logger = require('../middleware/logger');

const searchRouter = require('../search/search-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use("/search", searchRouter);

server.get('/', (_, res) => {
  res.send('<h1>The <a href="https://github.com/thisbenrogers/my-neighbor-api">My Neighbor API</a></h1>');
})

module.exports = server;