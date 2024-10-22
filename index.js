import express from "express";
import path from "path";
import indexRouter from "./routes/indexRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", userRouter);
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
