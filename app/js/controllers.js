'use strict';

/* Controllers */


function TerrListCtrl($scope, $http) {
	$http.get('territories/territories.json').success(function(data) {
		$scope.territories = data;
	});

	$scope.listType = 'todos';
}
//TerrListCtrl.$inject = [];


function MyCtrl2() {
}
//MyCtrl2.$inject = [];
