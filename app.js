const express = require("express");
const ejs = require("ejs");

const homeWhyContent = "To show off a little about myself while putting into practice what I learned in a lighthearted manner. This all started though because while I was working as a DevOps Engineer one of my largest hurdles in implementing a CI/CD process was refactoring the code the developers wrote to work securely in a cloud environment. In understanding how websites are created from front to back it makes that hurdle much smaller.";
const homeHowContent = "I put together this website leveraging what I learned from a very lengthy full stack web dev course. It went over much more than what I'm including here but for this site I implemented HTML, CSS, Bootstrap, Node.js along with Express, and EJS. If you want to see exactly how I made this website there's a link to the git repo in the footer.";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home", {
    why: homeWhyContent,
    how: homeHowContent
  });
});

app.get("/personal", function(req, res) {
  res.render("personal");
});

app.get("/professional", function(req, res) {
  res.render("professional");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running");
});
