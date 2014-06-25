angular.module('piece')

.controller('MenuController', function($scope) {

	$scope.share = function(item) {
		alert('Share Item: ' + item.id);
	};

	$scope.delete = function(item) {
		$scope.items.splice($scope.items.indexOf(item), 1);
	};

	$scope.openInWebView = function(item) {
		var ref = window.open(item.linkUrl, '_blank', 'location=no,toolbar=yes,closebuttoncaption=Home,disallowoverscroll=yes,allowInlineMediaPlayback=yes');
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
		name: '2048',
		imgUrl: 'img/game.png',
		linkUrl: "apps/2048/index.html"
	}, {
		name: '聊天',
		imgUrl: 'img/game.png',
		linkUrl: "apps/chat/index.html"
	}, {
		name: '卡片',
		imgUrl: 'img/game.png',
		linkUrl: "apps/card/index.html"
	}];
})