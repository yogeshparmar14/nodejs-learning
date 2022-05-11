const express =require("express");
const app = express();
const router = require("./controller/routes.js");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use("/statics",express.static(__dirname + "/statics"))
app.use("/accounts",router);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

// app.get("/submit",(req,res)=>{
//     const {data,email}=req.query;
//     console.log(data);
//     console.log(email);
//     if(data){
//         console.log("data is available")
//     }else{
//         console.log("data is not available")
//     }
//     res.send("Submitted!");
// });

app.post("/submit",(req,res)=>{
    const {data,email}=req.body;
    console.log(data);
    console.log(email);
    if(data){
        console.log("data is available")
    }else{
        console.log("data is not available")
    }
    res.send("Submitted!");
});

app.listen(PORT,()=>{
    console.log(`starting at ${PORT}`)
});