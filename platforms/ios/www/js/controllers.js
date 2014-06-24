angular.module('starter.controllers', [])

.controller('PlaylistsCtrl', function($scope) {
	$scope.playlists = [{
		title: 'Reggae',
		id: 1
	}, {
		title: 'Chill',
		id: 2
	}, {
		title: 'Dubstep',
		id: 3
	}, {
		title: 'Indie',
		id: 4
	}, {
		title: 'Rap',
		id: 5
	}, {
		title: 'Cowbell',
		id: 6
	}];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {})

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate) {

	$scope.data = {
		showDelete: false
	};

	$scope.share = function(item) {
		alert('Share Item: ' + item.id);
	};

	$scope.delete = function(item) {
		$scope.items.splice($scope.items.indexOf(item), 1);
	};

	$scope.openInWebView = function(item) {
		var ref = window.open("http://music.baidu.com/", '_blank', 'location=no,toolbar=yes,closebuttoncaption=Home,disallowoverscroll=yes,allowInlineMediaPlayback=yes');
	};

	$scope.favoriteItems = [{
		name: 'chat',
		title: '对话',
		description: '和朋友聊天',
		iconClass: 'ion-ios7-chatboxes'
	}, {
		name: 'browse',
		title: 'Top Sites',
		description: 'top sites',
		iconClass: 'ion-ios7-albums'
	}];

	$scope.recentItems = [{
		id: 0,
		name: 'search',
		title: 'home',
		description: '',
		imgUrl: 'img/game.png'
	}, {
		id: 1,
		name: 'browse',
		title: 'browse',
		description: '',
		imgUrl: 'img/game.png'
	}, {
		id: 2,
		name: 'playlists',
		title: 'playlists',
		description: '',
		imgUrl: 'img/game.png'
	}];
})