import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoModel from "./models/todo.model.js"


const app = express()


app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/Todo')


app.post('/add', (req,res)=>{
    const task = req.body.task;
    todoModel.create({
        task:task
    }).then(result =>res.json(result))
    .catch(err=>console.log(err))
})

app.get('/get', (req,res)=>{
    // const task = req.params
    todoModel.find()
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})


app.put('/update/:id', (req,res)=>{
    const {id}= req.params
    todoModel.findByIdAndUpdate({_id: id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

app.delete('/delete/:id', (req,res)=>{
    const {id}= req.params
    todoModel.findByIdAndDelete({_id: id})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

app.listen(3000, ()=>{
    console.log('app is running on port 3000')
})