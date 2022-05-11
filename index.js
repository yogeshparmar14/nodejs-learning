const express =require("express");
const app = express();
const router = require("./controller/routes.js");


app.use(express.urlencoded({extended:true}));
app.use("/statics",express.static(__dirname + "/statics"));

app.set("view engine","ejs");
app.set("views",__dirname + "/views");

app.use("/accounts",router);

app.get("/",(req,res)=>{
    
    res.render("index");
   
});

app.get("/contact",(req, res)=>{
    res.render("contact")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`starting at ${PORT}`)
});