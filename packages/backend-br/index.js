require("dotenv").config();
require("express-async-errors");
const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const morgan = require("morgan");
const bodyParser = require("body-parser");

// Security packages and connection to the db
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const connectDB = require("./db/connect");

// Routes
const notifications = require("./routes/notifications");
const users = require("./routes/users");
const testing = require("./routes/testing");
const auth = require("./routes/auth");
const reminders = require("./routes/reminders");

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
    max: 10000,
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
