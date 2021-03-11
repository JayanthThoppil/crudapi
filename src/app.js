const express = require('express');
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// app.get('/',(req,res) => {
//     res.send('Hello world from');
// });

//create new students
// app.post('/students',(req,res) => {
//     //console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })

//     res.send('Hello');
// });

app.post('/students',async(req,res) => {
    try{
        const user =new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get('/students',async(req,res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

app.get('/students/:id', async(req,res) => {
    try{
        const _id = req.params.id;

        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    }catch(e){
        res.status(500).send(e);
    }    
})

// app.get('/students/:name', async(req,res) => {
//     try{
//         const _name = req.params.name;

//         const studentData1 = await Student.findOne({name:_name});
//         if(!studentData1){
//             return res.status(404).send();
//         }else{
//             res.send(studentData1);
//         }
//     }catch(e){
//         res.status(500).send(e);
//     }    
// })

app.patch('/students/:id', async (req,res) => {
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateStudent);
    }catch(e){
        res.status(404).send(e);
    }
})

app.delete('/students/:id',async(req,res)=> {
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id)
        if(!_id){
            return res.status(400).send()
        }
        else{
            res.send(deleteStudent);
        }
    }catch(e){
        res.status(500).send(e);
    }
})
app.listen(port, () => {
    console.log(`connecting to port no ${port}`);
});
