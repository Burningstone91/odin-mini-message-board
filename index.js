import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
