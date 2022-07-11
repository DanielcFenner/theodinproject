const express = require("express");
const routes = require("./routes/routes");

const app = express();
app.listen(3000);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);
