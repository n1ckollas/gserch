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

router.post('/near', function(req, res){
	value = req.body;
	console.log(value);
	var options = {
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&types=food&key=YOUR_API_KEY
		url:'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
	}
	if(value.locationlat != 0 && value.locationlon != 0){
		options.url +='location=' + value.locationlat.toString() +','+ value.locationlon.toString();
	}
	options.url += '&radius=' + (value.radius * 1609.344).toString() ;
	options.url += '&keyword=' + value.placeSearch ;
	options.url += '&type='+ value.cat;
	options.url += '&key=' + credos.googleKey;
	console.log(options.url)
	request.get(options, function(erro, responce, body){
		res.json(body)
	})
})


module.exports = router;
