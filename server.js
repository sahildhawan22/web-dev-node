//For getting our express app:
const express = require("express");
const app = express(); //creates an express application
const expressLayouts = require("express-ejs-layouts");

//Configure our view engine:
app.set("view enginer", "ejs");
app.set("views", __dirname + "/views"); //__dirname gives current directory. This line means serve all the views from views folder of current directory.
//Set the layout to be fetched from layouts folder's layput file:
app.set("layout", "layouts/layout");
app.use(expressLayouts);
//Tell Express where our public files are going to be, such as css, imgs, JS code:
app.use(express.static("public")); //middleware fn that tells from where to serve static files

const indexRouter = require("./routes/index");
app.use("/", indexRouter); // "/" route will be handled by indexRouter's file.

//Listen:
app.listen(process.env.PORT || 3000);
//The deployed server port will be fetched from env var.
//However for dev purposes, we will default it to port no. 3000.
