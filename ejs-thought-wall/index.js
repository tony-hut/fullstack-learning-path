import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let userPosts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs" ,{
    posts: userPosts
  });
})

app.post("/submit", (req,res) => {
 const postText = req.body.content;
 userPosts.push(postText);
 res.redirect("/");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});