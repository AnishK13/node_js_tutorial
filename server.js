//to connect to mongodb server, open cmd as administartor and execute net start mongodb. for stopping, execute net stop mongodb

const express = require('express');
const app = express();
const db = require('./db');

const person = require('./models/person');
const MenuItems = require('./models/MenuItems');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //it will convert the data into json object and store 

app.get('/h', (req,res)=>{
    console.log("Welcome to my server");
    res.send("Hola amigos!");
})
app.post('/person',async(req,res)=>{
    try{
        const data = req.body  //body parser parses all data into json object and stores it into req,.body
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

app.get('/person', async (req,res)=>{
    try{
        const data = await person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }
})

app.get('/person/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter')
        {
            const response = await person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else
        {
            res.status(404).json({error: "Invalid work type"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal server error"});
    }

})
app.listen(3000, ()=> {
    console.log("Listening on port 3000");
})