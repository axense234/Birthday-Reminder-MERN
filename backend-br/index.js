const connectDB = require("./db/connect");
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const morgan = require("morgan");

// Routes Import
const auth = require("./routes/auth");
const users = require("./routes/users");
const reminders = require("./routes/reminders");
const testing = require("./routes/testing");

// Security packages
const cors = require("cors");

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Third Party Middleware
app.use(morgan("tiny"));

// Security middleware
app.use(cors());

// Middleware Import
const errorHandlerMiddleware = require("./middleware/errorHandler");

// Routes
app.use("/", [auth, users, reminders, testing]);
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}..`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
