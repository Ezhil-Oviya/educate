const express = require("express");
const mongoose=require('mongoose');
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json()); 

connectDB();

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;
const MONGO_URI=process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
