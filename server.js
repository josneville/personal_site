var express = require('express');
var app = express();

var morgan = require('morgan');

app.use(morgan('dev'));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + "/public"));

app.listen(app.get('port'), function(){
	console.log("Server running on port: 5000");
});
