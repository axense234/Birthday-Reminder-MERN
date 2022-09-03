const connectDB = require("./db/connect");
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Routes Import
const auth = require("./routes/auth");
const users = require("./routes/users");
const reminders = require("./routes/reminders");
const testing = require("./routes/testing");
const notifications = require("./routes/notifications");

// Security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Third Party Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());

// Security middleware
app.set("trust proxy", 1);
// Limit each IP to request 100 times in 15 mins
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(cors());
app.use(helmet());
app.use(xss());

// Middleware Import
const errorHandlerMiddleware = require("./middleware/errorHandler");

// Routes
app.use("/", [auth, users, reminders, testing, notifications]);
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
