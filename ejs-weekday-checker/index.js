import express from "express";
import ejs from "ejs";


const app = express();
const port = 3000;
const d = new Date();
let advise = "";

app.get("/", (req, res) => {
  let day = d.getDay();
  if (day === 6 || day == 0) {
    advise = "Hey! It's a weekend, it's time to fun!"
  } else {
    advise = "Hey! It's a weekday, it's time to work hard!"
  }
  res.render("index.ejs", {advise});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});