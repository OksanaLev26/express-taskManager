const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: String, required: true },
    dueDate: String,
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Task = model("Task", taskSchema);

module.exports = Task;