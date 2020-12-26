const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 
app.get('/user',(req,res)=>{
    console.log(req.query.name);
    res.json('name:'+req.query.name);})

app.post('/user',(req,res)=>{
    const Name = req.body.name
    console.log(' name :'+name);
    res.json('name:'+name);
})

app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

