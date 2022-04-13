const express = require("express");
const bodeParser = require("body-parser");
const https = require("https");
const app=express();

app.use(bodeParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    // console.log(req.body.cityName);
    var city = req.body.cityName;
    const id = "9f7b102f9c961d46863ef41e71d50e77";
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+id+"&units="+unit;

    https.get(url,function(response){
        console.log("status code "+response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
            res.write("<p>The weather  is "+weatherDescription+" outside.</p>");
            res.write("<h1>weather in "+city+" is "+temp+" degree Celcuis.</h1>");
            res.write("<img src="+icon+">");
            res.send();
        })
    });
})


app.listen(3000,function(){
    console.log("server is running at 3000");
});