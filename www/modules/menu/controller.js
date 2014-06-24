angular.module('piece')

.controller('MenuController', function($scope) {

	$scope.share = function(item) {
		alert('Share Item: ' + item.id);
	};

	$scope.delete = function(item) {
		$scope.items.splice($scope.items.indexOf(item), 1);
	};

	$scope.openInWebView = function(item) {
		var ref = window.open("apps/2048/index.html", '_blank', 'location=no,toolbar=yes,closebuttoncaption=Home,disallowoverscroll=yes,allowInlineMediaPlayback=yes');
	};

	$scope.favoriteItems = [{
		name: 'store',
		title: '应用市场',
		iconClass: 'ion-ios7-cloud'
	}, {
		name: 'setting',
		title: '个人设置',
		iconClass: 'ion-ios7-gear'
	}];

	$scope.recentItems = [{
		name: 'search',
		title: 'home',
		imgUrl: 'img/game.png'
	}, {
		name: 'browse',
		title: 'browse',
		imgUrl: 'img/game.png'
	}, {
		name: 'playlists',
		title: 'playlists',
		imgUrl: 'img/game.png'
	}];
})