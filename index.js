import express from "express";
import path from "path";
import indexRouter from "./routes/indexRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setting up serving static files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
