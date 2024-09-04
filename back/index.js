const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const authRouter = require("./src/routes/auth");
const newsRouter = require("./src/routes/news");

app.use(cors());
app.use(express.json());

const MONGODB_URI =
  "mongodb+srv://Wango:jFLOXtAOMIX1zoA2@wango.mk71yws.mongodb.net/";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connection to MongoDB:", error.message);
  });

app.use("/auth", authRouter);
app.use("/news", newsRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
