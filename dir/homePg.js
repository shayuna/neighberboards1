var express=require("express");
var router=express.Router();

router.get("/",function(req,res,next){
    res.render("testPg");
});
router.get("/papi",function(req,res,next){
    res.end("mami and papi");
});
router.get("/*",function(req,res,next){
    res.end("mami and something unclear");
});

module.exports=router;