const http = require('http');
const express = require('express');
require('dotenv').config();

const port = process.env.PORT;
const apikey = process.env.API_KEY;

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/',(req, res)=>{
    res.render('index', {title : 'Home'});
})

app.get('/about',(req, res)=>{
    res.render('about', {title : 'About'});
})

app.get('/check-weather/pincode',(req, res)=>{
    res.render('pincode', {title: 'Pincode'})
})

app.post('/check-weather',(req, res)=>{
    var pincode = req.body.pincode;
    var country = req.body.country;
    var url= `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},${country}&units=metric&appid=`+ apikey;
    var request = require('request');
    request(url,function(err, r, body){
        const data = JSON.parse(body);
        //console.log(body);
        res.render('pincode',{title: 'Weather Details', data});
    });
})

app.use((req, res)=>{
    res.status(404).render('404',  {title : '404'});
})

app.listen(port);
