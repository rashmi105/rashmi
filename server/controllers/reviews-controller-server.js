var Review = require('../models/Review');


module.exports.create=function (req,res)
{

var rv=new Review(req.body);
rv.save(function(err, result) {

	res.json(result);
});
}	//console.log(req.body);

module.exports.list=function (req,res)
{

Review.find({},function(err,results)
{
	res.json(results);
});
	

}
