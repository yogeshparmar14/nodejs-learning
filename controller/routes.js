const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Accounts Home!");
});

router.get("/route",(req,res)=>{
    res.send("From Router !");
});

module.exports = router;