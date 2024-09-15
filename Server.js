const express = require("express");
const playerRoutes = require("./routes/Players");
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose
  .connect("mongodb+srv://vasavikota12:2623120413$Vas@cluster0.pohg9.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Example app listening on port" + port);
    });
  })
  .catch((err) => console.error("Failed to connect", err));

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});



app.use("/api/players", playerRoutes); 