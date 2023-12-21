const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

const port = 8090;
app.listen(port,()=>{
    console.log('server is running on http://localhost:' + port);
});