const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

require("dotenv").config();

const posts = [
  {
    user: "User1",
    description: "Welcome User1",
  },
  {
    user: "User2",
    description: "Welcome User2",
  },
];

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split("")[1];

  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    res.user = user;
    next();
  });
};

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { user: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
  res.json({ accessTokenis: accessToken });
});
app.use(authenticateToken);

app.get("/posts", (req, res) => {
  console.log(req.user.name);
  res.json(posts.filter((post) => post.name === req.user.name));
});

app.listen(process.env.PORT3, () => {
  console.log("server is running on http://localhost:" + process.env.PORT3);
});
