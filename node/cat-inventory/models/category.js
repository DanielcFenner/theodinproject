const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CategorySchema = new Schema({
  name: { type: String },
});

CategorySchema.virtual("url").get(function () {
  return "/category/" + this._id;
});

module.exports = mongoose.model("Category", CategorySchema);
