const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post('/movies-count', function(req, res){
    const movies = req.body.movies;
    const response = schema.safeParse(movies);
    if(!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })
    }else {
        res.send({
            response
        })
    }
});

app.listen(3000,()=>{
    console.log("Server is running in port 3000");
});