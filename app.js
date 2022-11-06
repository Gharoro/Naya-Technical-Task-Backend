const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const http = require("http");

// Load env vars
dotenv.config();

// Setup express app
const app = express();
const server = http.createServer(app);

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());

// Enable helmet
app.use(helmet());

// Test route
app.get("/", async (req, res) => {
  res.send("API is live!");
});

const PORT = process.env.PORT || 5005;

server.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Server Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = server;
