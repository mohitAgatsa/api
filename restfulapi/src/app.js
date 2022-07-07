const express = require("express");
const mongoose = require("mongoose");

const Student = require("../src/models/students");
require("./db/conn");

const app = express();

const PORT = 4000;

app.use(express.json());

// app.post("/students", (req, res) => {
//   console.log(req.body);

//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

// individual data
app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);

    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.send(e);
  }
});

app.listen(PORT, () => {
  // console.log(`connection is set up at ${port}`);
  console.log("Connection is set up at " + PORT);
});
