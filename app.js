const express = require('express');
const app = express();
const PORT = 3030

app.use(express.json())


const mongoose = require('mongoose');

mongoose.connect('mongodb://saimon:dci123@ds119268.mlab.com:19268/students');

// const Studen = require("./model/StudentsSchema");

const Attendance = require("./model/AttendanceSchema");
app.get("/", (req, res) => {

});

app.post("/add-attendance", (req, res) => {
    const {
        student_id,
        student_class,
        comment,
        date_arrived,
        date_left
    } = req.body

    /* const newAttendance = new ({
        student_id,
        student_class,
        comment,
        date_arrived,
        date_left
    })
    newAttendance.save() */

    Attendance.create({
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