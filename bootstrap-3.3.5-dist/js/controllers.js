//module represent angular app

var app = angular.module("MyApp", []);
app.controller('detailsController', function($scope)
	{
//$scope accces DOM - access variables
		$scope.fname = "George";
		$scope.lname = "Milanya";
		$scope.course = "Mean Stack Course";
		$scope.school = "The Dev School";
		$scope.grade = "A";
	});

//2nd controller
app.controller('carsController', function($scope)
	{
		$scope.cars = [ //here we create an array of objects

			{type:"saloon",model:"mac2",brand:"Toyota",year:2006},
			 {type:"station_wagon",model:"probox",brand:"Toyota",year:2009},
			  {type:"prado",model:"pajero",brand:"Toyota",year:2010},
			   {type:"pickup",model:"dmax",brand:"Isuzu",year:2005},
			    {type:"saloon",model:"c600",brand:"mercedes",year:2011}

		
		];
	
	});

//here we consume a webservice/API

app.controller('blogsController', function($scope,$http)
{

	$http.get('http://jsonplaceholder.typicode.com/posts/1/comments')
	.success(function(response)
		{
			
			 //get server response
			$scope.blogs=response;
		})
	.error(function(response)
		{

			console.log(response);

		});
	});    //end







