const express =	require('express');
const http =	require('http');
const request = require('request');

const credos = require('./cred');

var app 		=	express();
var router		=	express.Router();

// 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
//                      + 'query=' + query
//                      + '&location='+ store_info[4] +','+ store_info[5]
//                      + '&radius=5000'
//                      + '&key=' + google_key)
// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=geocode&language=fr&key=YOUR_API_KEY

router.post('/address', function(req, res){
	place_type = req.body.place;
	value = req.body.val;
	var options = {
		url:'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
			+'input=' + value 
			+'&types='+ place_type
			+'&key=' + credos.googleKey,

	}
	request.get(options, function(erro, responce, body){
		res.json(body)
	})
})


module.exports = router;
