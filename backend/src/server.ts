import express from "express";

const app = express();

app.get("/users", (req, res) => {
  res.json(["vini", "eu", "tres"]);
});

app.listen(3333);
