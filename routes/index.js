var express = require('express');
var path = require('path')
var router = express.Router();
indexHtml = '/home/nickolai/Angular/gsrch/dist/index.html';
router.get('*', function(req, res, next){
	res.sendFile(indexHtml);
})

module.exports = router;