const zod = require("zod");
const express = require("express");

const app = express();

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    
    const response = schema.safeParse(obj);
    console.log(response);
}

app.post('/login',(req,res)=>{
    const response = validateInput(req.body);
    // console.log(response);
    // if(!response.success){
    //     res.json({
    //         msg: "Your input is invalid"
    //     })
    //     return;
    // }else{
    //     res.send({
    //         response
    //     })
    // }
})

app.listen(3000,()=>{
    console.log("Server is running in port 3000");
});