import mongoose from "mongoose";
import bcrypt from "bcrypt"; // Import bcrypt

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["teacher", "student"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  username: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving to database
personSchema.pre("save", async function (next) {
  const person = this;

  // Hash the password only if modified or new
  if (!person.isModified("password")) return next();

  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10); // Fixed typo (gensalt → genSalt)

    // Hash password
    person.password = await bcrypt.hash(person.password, salt);

    next();
  } catch (err) {
    return next(err);
  }
});

// Method to compare password
personSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw err;
  }
};

const person = mongoose.model("person", personSchema);

export default person; // Changed module.exports to export default for ES module
