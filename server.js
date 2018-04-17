
var express 		=	require('express');
var bodyParser 		=	require('body-parser');
var path 			=	require('path');


var index 				=	require('./routes/index');
var placeAuto 			=	require('./routes/addrauto');
var nearSearch 		=	require('./routes/nearsearch');

var app = express();
  //view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/v1/', placeAuto);
app.use('/api/v2/', nearSearch);
app.use('*', index);

app.listen(3000, function(){
 console.log('server started on port 3000...');
});