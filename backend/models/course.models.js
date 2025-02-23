import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  registered: { // Fixed spelling mistake
    type: Number,
    default: 0, // Added default value to prevent undefined issues
  },
  num_sales: {
    type: Number,
    default: 0,
  },
  category: { // Changed from "courses" to "category" for better clarity
    type: String,
    enum: ["Web development", "AI & ML", "Cybersecurity"],
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course; // Changed module.exports to ES module syntax
