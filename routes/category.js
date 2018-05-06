var express = require('express');
var categoryHelper=require('../app/database/categoryDAL');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data=categoryHelper.getMainCategories().then(function(data){
    console.log(data);
    res.json(data[0]);
  });
});

router.post('/', function(req, res, next) {
  var requestBody=req.body;
  var objCategories={};
  objCategories.Title=requestBody.Title;
  objCategories.Description=requestBody.Description;
  var data=categoryHelper.createMainCategory(objCategories,1,1).then(function(data){
    console.log(data);
    res.json(data[1]);
  });
});

module.exports = router;
