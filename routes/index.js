var express = require('express');

var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name: String});


router.get('/', function(request, response){
  console.log('Here is a console log');
  response.send('Hello WORLD!');

});





module.exports = router;
