const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
require("dotenv").config();

// connect to mongoDB
const dbURI = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_KEY}@nodetuts.qc3so.mongodb.net/node-tuts?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
// app.listen(3000);

// middleware & static files
// all files in publics are now accessible by the browser
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// middleware which runs everytime to give us some info
app.use(morgan("tiny"));

// Routes
// Standard GET responses
app.get("/", (req, res) => {
  //res.send("<p>home page</p>");
  //res.sendFile("./views/index.html", { root: __dirname });
  // const blogs = [
  //   {
  //     title: "Can't stop thinking about Svelte",
  //     snippet: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  //   },
  //   {
  //     title: "Reactjs cheated on my wife",
  //     snippet: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  //   },
  //   {
  //     title: "Solidjs beat my ferrari in a drag race",
  //     snippet: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // res.send("<p>about page</p>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs", { title: "Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "404" });
    });
});

// redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// 404 page
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

//mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog",
//     snippet: "about my new blog",
//     body: "my ferrari got wheels",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // retrieve all blogs from db
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("62b5cc6694cfab7c56eece4a")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
