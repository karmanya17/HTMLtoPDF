const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const fs=require("fs");
var htmlParser=require("node-html-parser");
var pdf = require('html-pdf');
const route=require("./routes/route");
const nodeHtmlToImage = require('node-html-to-image')
app.use(bodyParser.json());



app.use("/convert",route);

app.listen(3000,function(req,res){
  console.log("server is up at 3000");
})
