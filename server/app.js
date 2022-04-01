//----------------- packages -----------------//
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
// routes
const contactRoutes = require("./routes/contact");
const loginRoutes = require("./routes/login");
const experienceRoutes = require("./routes/experience");
const educationRoutes = require("./routes/education");
const aboutRoutes = require("./routes/about");

//----------------- app declaration -----------------//
const app = express();

//----------------- bodyparser useage -----------------//
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//----------------- disable CORS policy -----------------//
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

//----------------- routes useage -----------------//
app.use("/contact", contactRoutes);
app.use("/login", loginRoutes);
app.use("/experience", experienceRoutes);
app.use("/education", educationRoutes);
app.use("/about", aboutRoutes);
//----------------- connection string for mongodb database connection -----------------//
const connectionString =
  "mongodb+srv://" +
  process.env.ADMIN_USER +
  ":" +
  process.env.ADMIN_PASSWORD +
  "@cluster.wtzar.mongodb.net/Cluster?retryWrites=true&w=majority";

///----------------- connect to database and start server -----------------//
mongoose
  .connect(connectionString)
  .then((result) =>
    app.listen(process.env.PORT || 5000, () => {
      console.log("server started on port 3000");
    })
  )
  .catch((err) => console.log(err));
