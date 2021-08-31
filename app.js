const http = require('http');
const express = require('express');
//require('dotenv').config();

//const port = process.env.PORT;
//const apikey = process.env.API_KEY;
const apikey = require('./keys.js')

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/',(req, res)=>{
    res.render('index', {title : 'Home'});
})

app.post('/check-weather',(req, res)=>{
    var pincode = req.body.pincode;
    console.log(pincode);
    var url= `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},in&units=metric&appid=`+ apikey;
    var request = require('request');
    request(url,function(err, r, body){
        const data = JSON.parse(body);
        //console.log(body);
        res.render('details',{title: 'Weather Details', data});
    });
})

app.listen(8081);
