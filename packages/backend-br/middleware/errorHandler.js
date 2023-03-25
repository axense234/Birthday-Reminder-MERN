const errorHandlerMiddleware = (err, req, res, next) => {
  const customError = {
    msg: err.message || "Something went wrong,please try again",
    statusCode: err.statusCode || 500,
  };

  if (err.name === "ValidationError") {
    // eslint-disable-next-line prefer-destructuring
    customError.msg = Object.values(err.errors).map((error) => {
      return error.message;
    })[0];
    customError.statusCode = 400;
  } else if (err.code === 11000) {
    customError.msg = "Please provide an unique email.";
    customError.statusCode = 400;
  } else if (err.statusCode === 410) {
    customError.msg = "Notifications are not allowed.";
  }

  console.log(err);

  return res.status(customError.statusCode).json(customError.msg);
};
module.exports = errorHandlerMiddleware;
