/**
 * Controllers of the utag.main module
 */
angular
.module('utag.tags.controller', [])

/**
 * @ngdoc function
 * @name utag.tags.controller:TagsBaseCtrl
 * @description
 * # TagsBaseCtrl
 * Controller of the utag app
 */
.controller('TagsBaseCtrl', function TagsBaseCtrl ($scope, $log, colorCache) {
	'use strict';

	$scope.color = function color(tag, alpha) {
		return colorCache.get(tag.name, alpha).rgba;
	};

})

/**
 * @ngdoc function
 * @name utag.tags.controller:TagsCtrl
 * @description
 * # TagsCtrl
 * Controller of the utag app
 */
.controller('TagsCtrl', function TagsCtrl ($scope, $log, $controller, $location, Tags) {
	'use strict';

	$controller('TagsBaseCtrl', { $scope: $scope });

	if (!$scope.tags) {
		$scope.tags = Tags.repo.query(function(data, responseHeaders) {
			// $log.info(data);
			// $log.info(responseHeaders);
		}, function(httpResponse) {
			// $log.info(httpResponse);
		});
	}

	$scope.showDetailView = function showDetailView(id) {
		$location.path('/tags/'+ id + '/view');
	};

})

/**
 * @ngdoc function
 * @name utag.tags.controller:TagsDetailCtrl
 * @description
 * # TagsDetailCtrl
 * Controller of the utag app
 */
.controller('TagsDetailCtrl', function TagsDetailCtrl ($scope, $log, $controller, $routeParams, Tags) {
	'use strict';

	$controller('TagsBaseCtrl', { $scope: $scope });

	if (!$scope.tag) {
		$scope.tag = Tags.repo.get({id: $routeParams.id}, function(data, responseHeaders) {
			// $log.info(data);
			// $log.info(responseHeaders);
		}, function(httpResponse) {
			// $log.info(httpResponse);
		});
	}

});
