var app = angular.module('app', []);

//the following code is written to help with minification you declare the variable name in an array as a string and then put it in the function.  Angular would not know what to do there..
app.controller("IndexController", ['$scope', '$http', function($scope, $http){
   $scope.cat = {};
   $scope.cats = [];
   var fetchCats = function() {
      //  return   not necessary to "return"
       $http.get('/cats').then(function(response){
           if(response.status !== 200){
               throw new Error('Failed to fetch cats from the API');
           }
           $scope.cat = {};
           $scope.cats = response.data;
           return response.data;
       })
   };
   $scope.add = function(cat){
       return $http.post('/add', cat).then(fetchCats());
   };
   fetchCats();
}]);



//You can also change your index.html to have your ng-controller= "IndexControler as index"  then you'd have an ng-show = "index.cat.name"  ... etc.
//So in client.js, you can use var vm = this and get rid of $scope:


// var app = angular.module('app', []);
// app.controller("IndexController", [ '$http', function( $http){
    //var vm = this;
//   vm.cat = {};
//   vm.cats = [];
//   var fetchCats = function() {
 // $http.get('/cats').then(function(response){
//       if(response.status !== 200){
//         throw new Error('Failed to fetch cats from the API');
//       }
//       vm.cat = {};
//       vm.cats = response.data;
//       return response.data;
//     })
//   };
//  vm.add = function(cat){
//     return $http.post('/add', cat).then(fetchCats());
//   };
//   fetchCats();
// }]);//end of controller function
