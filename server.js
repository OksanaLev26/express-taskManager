const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Task = require("./models/tasks");
const taskController = require("./controllers/taskController");
const seedData = require('./utilities/seedData');
const cors = require('cors');

dotenv.config();

const app = express();
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);
const PORT = process.env.PORT || 3001

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: '*' }));

app.use("/", taskController);

app.get('/seed', async (req, res) => {
  await Task.deleteMany({});
  await Task.insertMany(seedData);
  res.send('done!');
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
