import { Router } from "express";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/new", (req, res) => res.render("user-form"));
indexRouter.post("/new", (req, res) => {
  const author = req.body.author;
  const message = req.body.message;

  const newMessage = {
    text: message,
    user: author,
    added: new Date(),
  };
  messages.push(newMessage);

  res.redirect("/");
});
indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Message Board", messages: messages })
);

export default indexRouter;
