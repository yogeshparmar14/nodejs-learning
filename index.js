const express =require("express");
const app = express();
const router = require("./controller/routes.js");


app.use(express.urlencoded({extended:true}));
app.use("/statics",express.static(__dirname + "/statics"))
app.use("/accounts",router);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`starting at ${PORT}`)
});