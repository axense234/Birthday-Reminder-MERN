const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
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
