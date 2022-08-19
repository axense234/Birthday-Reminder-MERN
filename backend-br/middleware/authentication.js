const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("thats right");
    return res.status(401).json({
      msg: "Invalid Token",
    });
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = {
      userId: payload.id,
      username: payload.name,
    };
    next();
  } catch (error) {
    return res.status(403).json({ msg: "Authentication failed." });
  }
};

module.exports = authenticationMiddleware;
