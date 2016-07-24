var express = require('express');

var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');


mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name: String});


router.get('/', function(request, response, next){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));

});





module.exports = router;
