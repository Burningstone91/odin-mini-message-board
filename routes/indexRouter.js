import { v4 as uuidv4 } from "uuid";
import { Router } from "express";

const messages = [
  {
    id: uuidv4(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/new", (req, res) => res.render("user-form"));
indexRouter.get("/messages/:messageId", (req, res) => {
  const messageId = req.params.messageId;
  const message = messages.filter((message) => message.id === messageId);
  res.render("message", { message: message[0] });
});
indexRouter.post("/new", (req, res) => {
  const author = req.body.author;
  const message = req.body.message;

  const newMessage = {
    id: uuidv4(),
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
