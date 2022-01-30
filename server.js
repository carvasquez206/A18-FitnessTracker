const express = require("express");
const mongoose = require("mongoose");
const logger = require("logger");
//make sure PORT is all caps
const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mngoose database 
mongoose.connect(process.env.MONGODB_URI || "Add mongodb here", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Listen to request 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});