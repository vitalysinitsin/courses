const authorize = (req, res, next) => {
  console.log("authorize");

  const { user } = req.query;
  if (user === "john") {
    req.user = { name: user, id: 3 };
    next();
  } else {
    res.status(401).send("unathorized");
  }
};

module.exports = authorize;
