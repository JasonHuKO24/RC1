var express =require('express');
var router =express.Router();

var Category = require('../models/Category');

router.get('/',function(req,res,next){

    //读取所有的分类信息
    Category.find().then(function(Categories){
        // console.log(Categories);

        res.render('main/index',{
            userInfo: req.userInfo,
            Categories:Categories
        })
    })
}) 
module.exports = router;