import express from "express";
import Course from "../models/course.models.js";

const router = express.Router(); // Fixed issue (used 'router' instead of 'Router')

// CRUD for Course Items

// CREATE
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the Course data

    // Create new Course
    const newCourse = new Course(data);

    // Save the newCourse
    const response = await newCourse.save();
    console.log("Data saved");
    res.status(201).json(response); // 201 (Created) is better for POST
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// READ - Get all courses
router.get("/", async (req, res) => {
  try {
    const data = await Course.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// READ - Get courses by category
router.get("/:category", async (req, res) => {
  try {
    const category = req.params.category;

    if (["Web development", "AI & ML", "Cybersecurity"].includes(category)) {
      const response = await Course.find({ category });
      console.log("Response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid category type" }); // 400 for bad request
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// UPDATE - Edit course by ID
router.put("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedItemData = req.body;

    const response = await Course.findByIdAndUpdate(itemId, updatedItemData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "Course not found" });
    }

    console.log("Data updated");
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE - Remove course by ID
router.delete("/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    const response = await Course.findByIdAndDelete(itemId);
    if (!response) {
      return res.status(404).json({ error: "Course not found" });
    }

    console.log("Data deleted");
    res.status(200).json({ message: "Course deleted successfully", response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router; // Changed module.exports to export default for ES module
