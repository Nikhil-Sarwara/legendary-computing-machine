require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());
app.use(cors());

// Define Bin Routes
app.use("/api/bins", require("./routes/bins"));

// Basic root route
app.get("/", (req, res) => {
  res.send("Copman Sensor Data Backend is running! 📈");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} 🚀`));
