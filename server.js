const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log("this is the first middleware");
    next();
})

app.use((req, res, next)=>{
    console.log("this is the second middleware");
    res.send("welcome to Node js")
    next();
})

app.listen(4000);