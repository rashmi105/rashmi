app.controller('reviewscontroller',['$scope','$resource' , function  ($scope, $resource) {

var Review = $resource('/api/reviews');

Review.query(function(results){

	$scope.reviews =results;
});    

	$scope.createreview = function()
	{
		var rv = new Review();
		rv.name = $scope.reviewName;
		rv.$save(function(result) {
			$scope.reviews.push(result);
			$scope.reviewName ='';
		});

	}



}])

