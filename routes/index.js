const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
  },
  {
    text: "Hello Amando!",
    user: "Charles",
    added: new Date().toLocaleString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.post("/new", function (req, res, next) {
  const userName = req.body.user;
  const message = req.body.message;
  messages.push({ text: message, user: userName, added: new Date().toLocaleString() });
  res.redirect("/");
});

module.exports = router;
