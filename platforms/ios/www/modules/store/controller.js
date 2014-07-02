angular.module('piece')

.controller('StoreController', function($scope, $ionicLoading) {

	$scope.slideHasChanged = function($index) {
		console.info($index);
	};

	// $ionicLoading.show({
	// 	template: 'Loading...'
	// });

});