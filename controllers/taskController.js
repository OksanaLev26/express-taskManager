const express = require("express");
const router = express.Router();
const Task = require("../models/tasks");

// INDUCES

// Index
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

// New - Will be handled by React application

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const tasks = await Task.findByIdAndRemove(req.params.id);
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    if (req.body.completed === "on") {
      req.body.completed = true;
    } else {
      req.body.completed = false;
    }
    const updatedTasks = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedTasks);
  } catch (error) {
    console.log(error);
  }
});

// Create
router.post("/", async (req, res) => {
    try {
      if (req.body.completed === "on") {
        req.body.completed = true;
      } else {
        req.body.completed = false;
      }
      const tasks = await Task.create(req.body);
    //   res.send(req.body);
      res.json(tasks);
    } catch (error) {
      console.log(error);
    }
  });

  // Edit - Will be handled by React application

  // Show
  router.get("/:id", async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      res.json(task);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
