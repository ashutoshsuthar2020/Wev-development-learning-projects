const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmical.html");
})

app.post("/",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight/height;
    res.send("BMI is found to be "+result+"kg/m.m");
})

app.listen(3000,function(){
    console.log("server is running at port 3000");
})