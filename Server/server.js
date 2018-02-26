var express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send('welcome to the world!');
});

app.listen(3000,()=>{
    
});