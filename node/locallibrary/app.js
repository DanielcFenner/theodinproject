require("dotenv").config();
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let hbs = require("hbs");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
var catalogRouter = require("./routes/catalog");

let app = express();

// set up the mongoose connection
let mongoose = require("mongoose");
const { hasSubscribers } = require("diagnostics_channel");
let mongoDB = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_KEY}
@cluster0.mzf5t.mongodb.net/local_library?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// view engine setup
const isEqualHelperHandlerbar = function (a, b, opts) {
  if (a == b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
};

hbs.registerHelper("ifeq", isEqualHelperHandlerbar);

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
