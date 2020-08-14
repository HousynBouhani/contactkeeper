// bring express with common js
const express = require("express");
//initialize app with express
const app = express();
// DB connection
const connectDB = require("./config/db");
connectDB();
// accept body request
app.use(express.json({ extended: false }));
// index route
app.get("/", (request, response) => {
  response.json({ msg: "welcome to the contact keeper app" });
});

//define routes paths
const users = require("./routes/users");
const contacts = require("./routes/contacts");
const auth = require("./routes/auth");

// define routes end points
app.use("/api/users", users);
app.use("/api/contacts", contacts);
app.use("/api/auth", auth);
// initialize port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on ${PORT}...`));
