const express = require('express');
const app = express();

app.use(express.json());

app.post('/movies-count', function(req, res){
    const movies = req.body.movies;
    const numofmovies = movies.length;
    
    res.send("You watched "+ numofmovies + " movies!");
});

app.listen(3000,()=>{
    console.log("Server is running in port 3000");
});