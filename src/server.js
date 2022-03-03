const express = require("express");
const routes = require("./routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(routes);

// Not Found
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(7777, () => console.log("Server started on port 7777"));
