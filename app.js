const express = require("express");
const mongoose = require("./config/db");
const bodyParser = require("body-parser");
const cors = require('cors');
const gstinRoutes = require("./routes/gstin");

const app = express();
app.use(cors());


// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Set up routes
app.use("/gstin", gstinRoutes);

// Define a default route
app.get("/", (req, res) => {
  res.send("Welcome to your backend API!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
