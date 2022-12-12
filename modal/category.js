const mongoose = require("mongoose");
const { Schema } = mongoose;
const category = Schema({
  category: [String],
});

var Category =
  mongoose.models.Categories || mongoose.model("Categories", category);

export default Category;
