const express=require("express");
const router=express.Router();
const createcontroller=require("../handler/convert");


router.post("/invoice/:name",createcontroller.convert);

module.exports=router;
