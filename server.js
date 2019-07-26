const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const listings = require("./routes/api/listings");
const users = require("./routes/api/users");

const app = express();

//Bodyparser Middleware
app.use(express.json());

//DB Config
const db = config.get("mongoURI");

//Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/listings", listings);
app.use("/api/users", users);
app.use("/api/auth", require("./routes/api/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
