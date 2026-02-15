import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();
  let advise = "";
  if (day === 6 || day === 0) {
    advise = "Hey! It's a weekend, it's time to have fun!"
  } else {
    advise = "Hey! It's a weekday, it's time to work hard!"
  }
  res.render("index.ejs", {advise});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});