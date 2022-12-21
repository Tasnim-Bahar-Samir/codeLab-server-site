const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const courses = require('./Data/Courses.json')
const instructors = require('./Data/Instructors.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Code lab server is running')
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.get('/course/:id',(req,res)=>{
    const id = req.params.id;
    const singleCourse = courses.find(course => course.id === id);
    res.send(singleCourse)
})

app.get('/instructors',(req,res)=>{
    res.send(instructors)
})

app.listen(port,()=>{
    console.log('Server is running on port', port)
})
