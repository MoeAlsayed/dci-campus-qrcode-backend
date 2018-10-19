const express = require('express');
const app = express();
const PORT = 3030

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const mongoose = require('mongoose');

mongoose.connect('mongodb://saimon:dci123@ds119268.mlab.com:19268/students');

// const Studen = require("./model/StudentsSchema");

const Attendance = require("./model/AttendanceSchema");
app.get("/attendance", (req, res) => {

    Attendance.find((err, data) => {
        if (err) console.log(err);

        // saved!
        res.send(data)
    })

});

app.post("/add-attendance", (req, res) => {
    const {
        student_name,
        student_id,
        student_class,
        comment,
        date_arrived,
        date_left
    } = req.body

    Attendance.create({
        student_name,
        student_id,
        student_class,
        comment: {
            text: comment
        },
        date_arrived,
        date_left
    }, function (err, data) {
        if (err) console.log(err);

        // saved!
        res.send(data)
    });
})


app.listen(PORT)