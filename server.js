//console.log("Hello from Node");

var express 	  = require('express'),
app 			  = express(),
bodyParser        = require('body-parser'),
mongoose          = require ('mongoose'),
reviewscontroller = require('./server/controllers/reviews-controller-server');
/*
app.get('/', function(req,res)
{
console.log('value of ******** dirname: ', __dirname);
res.sendFile(__dirname + '/client');
});
mongodb://<dbuser>:<dbpassword>@ds061518.mongolab.com:61518/rashmi
*/

mongoose.connect('mongodb://rashmi1:vnit2014@ds061518.mongolab.com:61518/rashmi');
app.use(bodyParser());
console.log('value of ******** dirname: ', __dirname);
app.use(express.static(__dirname +'/client'));

app.get('/api/reviews' ,reviewscontroller.list);
app.post('/api/reviews' ,reviewscontroller.create);

app.listen(process.env.PORT || 5000);
console.log("Server running on port no. 5000");
