import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/signin", (req, res) => {
  res.render("signin.ejs");
});
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});
app.get("/blog1", (req, res) => {
  res.render("blog1.ejs");
});
app.get("/view-blog1",(req, res) => {
  res.render("view-blog1.ejs");
});
app.get("/view-blog2",(req, res) => {
  res.render("view-blog2.ejs");
});
app.get("/view-blog3",(req, res) => {
  res.render("view-blog3.ejs");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }); 