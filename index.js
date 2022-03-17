const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const mongoStore = require("connect-mongo");
require("dotenv").config();

const db = require("./config/mongodb");

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(
  session({
    name: "EC-Intern-API",
    // TODO change the secret before deployment secret need to be proper key for now we put some random text
    saveUninitialized: false,
    resave: false,
    secret: process.env.SECRET,
    cookie: {
      maxAge: 1000 * 60 * 30,
    },
    store: mongoStore.create({
      clientPromise: db,
    }),
  })
);

app.use("/", require("./routers"));

app.get("/", (req, res) => {
  res.json({
    message: "EC Intership Task API",
  });
});

app.get("*", (req, res) => {
  res.json({
    message: "Page not found",
  });
});

app.listen(5044, () => {
  console.log("API listening on port 5044!");
});
