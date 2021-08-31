const http = require('http');
const express = require('express');

const port = 8081;

const app = express();
app.set('view engine','ejs');

//processing requests
app.get('/', (req, res)=>{
    res.render('index', {title: 'Home'})
    console.log('Server processed request.')
})

app.listen(port);

