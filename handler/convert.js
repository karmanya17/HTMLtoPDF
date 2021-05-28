const fs=require("fs");
var htmlParser=require("node-html-parser");
const nodeHtmlToImage = require('node-html-to-image')
var pdf = require('html-pdf');
const utils = require('util')
const logger=require("../logger");

const convert=function(req,res){
logger.info("time");
  var name=req.params.name;
  const file=fs.readFileSync(`${name}.html`).toString();
  const root=htmlParser.parse(file);
  var div=root.querySelector(".esc-receipt").toString();

  var css=fs.readFileSync('./middle.html','utf-8');
  var html=css+div;
  var options = {
                  height:"300mm",
                  width:"50mm",
                };

  try{
    pdf.create(html, options).toFile(`./output/pdf/${name}.pdf`, function(err, res) {
        if (err) return console.log(err);
        console.log(res);
        logger.info("time");
      })
      nodeHtmlToImage({
          output:`./output/image/${name}.png`,
          html: html
      }).then(() => console.log('The image was created successfully!'))

  res.send("PDF and Image Converted");
  }
  catch(err){
    console.log(err);
  }



}
  module.exports={convert};
