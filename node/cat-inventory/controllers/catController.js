const Cat = require("../models/cat");
const Category = require("../models/category");

const async = require("async");

exports.index = function (req, res) {
  Cat.find()
    .populate("category")
    .exec(function (err, catList) {
      if (err) {
        return next(err);
      }
      res.render("index", {
        title: "Cats",
        catList,
      });
    });
};
