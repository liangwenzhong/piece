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
		name: 'FlappyBird',
		imgUrl: 'img/icon/flappy.png',
		linkUrl: "apps/flappy-bird/index.html"
	}, {
		name: '2048',
		imgUrl: 'img/icon/2048.png',
		linkUrl: "apps/2048/index.html"
	}, {
		name: 'FlappyBird2048',
		imgUrl: 'img/icon/2048.png',
		linkUrl: "apps/Flappy-2048/index.html"
	}, {
		name: '聊天',
		imgUrl: 'img/icon/chat.png',
		linkUrl: "apps/chat/index.html"
	}, {
		name: '卡片',
		imgUrl: 'img/icon/card.png',
		linkUrl: "apps/card/index.html"
	}];
})