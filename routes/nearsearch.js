const express =	require('express');
const http =	require('http');
const request = require('request');

const credos = require('./cred');

var app 		=	express();
var router		=	express.Router();

router.post('/near', function(req, res){
	value = req.body;
	var options = {
		//https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=YOUR_API_KEY
		//https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=42.3675294,-71.186966&radius=10000&key=YOUR_API_KEY
		//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&types=food&key=YOUR_API_KEY
		url:'',
	}
	if(value.locationlat == 0 && value.locationlon == 0){
		options.url += 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
		options.url += 'query=' + value.placeSearch + '+around+'+ value.address;
		options.url += '&types=' + value.cat;
		options.url += '&key=' + credos.googleKey;

	}else {
		options.url += 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
		options.url += 'location=' + value.locationlat.toString() +','+ value.locationlon.toString();
		options.url += '&radius=' + (value.radius * 1609.344).toString() ;
		options.url += '&keyword=' + value.placeSearch ;
		options.url += '&type='+ value.cat;
		options.url += '&key=' + credos.googleKey;
	}
	request.get(options, function(erro, responce, body){
		res.json(body)
	})
})


module.exports = router;
