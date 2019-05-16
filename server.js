require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const db = require("./data/dbConfig");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(logger);
// server.use(validateUserId);
// server.use(validateUser);
// server.use(validatePost);

server.get("/", (req, res) => {
  res.send(`<h2>hey, Let's write some middleware!</h2>`);
});
// validateUserId, validateUser, validatePost,
//custom middleware

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}
// function validateUserId(req, res, next) {
//   console.log(req.params.id);
//   if (req.params.id) {
//     res.status(200).send("User ID Validated");
//     next();
//   } else {
//     res.status(403).send("Wrong User ID");
//   }
//   next();
// }
// function validateUser(req, res, next) {
//   console.log();
//   next();
// }
// function validatePost(req, res, next) {
//   console.log();
//   next();
// }

module.exports = server;
