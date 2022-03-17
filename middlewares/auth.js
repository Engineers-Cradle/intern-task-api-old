module.exports.auth = async (req, res, next) => {
  try {
    if (!req.headers.token == process.env.SECRET_KEY) {
      throw new Error("No token provided / Invalid token");
    } else if (req.headers.token == process.env.SECRET_KEY) {
      next();
    } else {
      throw new Error("No token provided / Invalid token");
    }
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: err.message,
    });
  }
  //   next();
};
