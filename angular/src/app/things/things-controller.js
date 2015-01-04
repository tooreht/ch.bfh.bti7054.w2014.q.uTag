/**
 * Controllers of the utag.things module
 */
angular
.module('utag.things.controller', [])

/**
 * @ngdoc function
 * @name utag.tags.controller:ThingsBaseCtrl
 * @description
 * # ThingsBaseCtrl
 * Controller of the utag app
 */
.controller('ThingsBaseCtrl', function ThingsBaseCtrl ($scope, $controller, $location, ngDialog) {
	'use strict';

	$controller('TagsBaseCtrl', { $scope: $scope });

	$scope.showThingDetailView = function showThingsDetailView(id) {
    console.log("$scope.showThingDetailView")
		$location.path('/things/'+ id + '/view');
	};

})

/**
 * @ngdoc function
 * @name utag.things.controller:ThingsCtrl
 * @description
 * # ThingsCtrl
 * Controller of the utag app
 */
.controller('ThingsCtrl', function ThingsCtrl ($scope, $controller, Things) {
	'use strict';

	// extend ThingsCtrl
	$controller('ThingsBaseCtrl', { $scope: $scope });

	$scope.title = 'Things';
	$scope.things = $scope.things || [];

	activate();

	function activate() {
		if ($scope.things.length === 0) {
			Things.repo.query(function(data) {
					$scope.things = data;
			});
		}
	}

})

/**
 * @ngdoc function
 * @name utag.tags.controller:ThingsDetailCtrl
 * @description
 * # ThingsDetailCtrl
 * Controller of the utag app
 */
.controller('ThingsDetailCtrl', function ThingsDetailCtrl ($scope, $log, $controller, $routeParams, $location, ngDialog, api, Tags, Things) {
	'use strict';

	// extend ThingsCtrl
	$controller('ThingsBaseCtrl', { $scope: $scope });

	$scope.title = 'ThingDetail';
	$scope.thing = $scope.thing || {};
	$scope.tags = $scope.tags || [];

  $scope.searchTags = function searchTags(keywords) {
  	keywords = keywords ? keywords.split(' ') : [];
  	return api.searchTags(keywords);
  }


    $scope.dialogShown = false;

	function showDetailsDialog(thing) {
		if (!$scope.dialogShown) {
			var dialog = ngDialog.open({
				templateUrl: '/utag/things/thing-edit-directive.html',
				controller: 'ThingsUpdateCtrl',
				className: 'ngdialog-theme-plain',
				scope: $scope,
			});
			$scope.dialogShown = true;

			dialog.closePromise.then(function (data) {
				$scope.dialogShown = false;
				// $log.info(data.id + ' has been dismissed.');
			});
		}
	}

	$scope.showDetailsDialog = showDetailsDialog;

	function showCreateDialog() {
		if (!$scope.dialogShown) {
			var dialog = ngDialog.open({
				templateUrl: '/utag/things/thing-create-directive.html',
				controller: 'ThingsCreateCtrl',
				className: 'ngdialog-theme-plain',
				scope: $scope,
			});
			$scope.dialogShown = true;

			dialog.closePromise.then(function (data) {
				$scope.dialogShown = false;
			});
		}
	}

	$scope.showCreateDialog = showCreateDialog;

  $scope.saveThing = function saveThing(thing) {
		Things.repo.update({id: thing.id}, thing, function(data) {$location.path('/');}, function(data) {
      $scope.messages = data.data.errors;
      console.log("failAtUpdate");
    });
	};

  //$scope.dialogShown = false;
  $scope.showDeleteDialog = function showDeleteDialog(thing) {
    Things.repo.delete({id: thing.id}, thing, function(data) {$location.path('/');}, function(data) {
      $scope.messages = data.data.errors;
      console.log("failAtDelete");
    });
  }

  activate();

	function activate() {
		if ($routeParams.id) {
			Things.repo.get({id: $routeParams.id}, function(data) {
					$scope.thing = data;
			});
		}
		if ($scope.tags.length === 0) {
			$scope.tags = api.userTagsDistinct();
		}
	}

})

/**
 * @ngdoc function
 * @name utag.tags.controller:ThingsDetailCtrl
 * @description
 * # ThingsDetailCtrl
 * Controller of the utag app
 */
.controller('ThingsUpdateCtrl', function ThingsUpdateCtrl ($scope, $log, $controller, $routeParams, $location, ngDialog, api, Tags, Things) {
  'use strict';

  // extend ThingsCtrl
  $controller('ThingsBaseCtrl', { $scope: $scope });

  $scope.title = 'ThingDetail';
  $scope.thing = $scope.thing || {};
  $scope.tags = $scope.tags || [];

  $scope.searchTags = function searchTags(keywords) {
    keywords = keywords ? keywords.split(' ') : [];
    return api.searchTags(keywords);
  }

  $scope.saveThing = function saveThing(thing) {
    Things.repo.update({id: $scope.thing.id}, thing, function(data) {$location.path('/');}, function(data) {
      $scope.messages = data.data.errors;
      console.log("failAtUpdate");
    });
  };

  //$scope.dialogShown = false;
  $scope.showDeleteDialog = function showDeleteDialog(thing) {
    Things.repo.delete({id: $scope.thing.id}, thing, function(data) {$location.path('/');}, function(data) {
      $scope.messages = data.data.errors;
      console.log("failAtDelete");
    });

   /* if (!$scope.dialogShown) {
      var dialog = ngDialog.open({
        templateUrl: '/utag/things/thing-delete.html',
        controller: 'ThingsDetailCtrl',
        className: 'ngdialog-theme-plain',
        scope: $scope,
      });
      $scope.dialogShown = true;

      dialog.closePromise.then(function (data) {
        $scope.dialogShown = false;
        if (data == '1') {
          Things.repo.update({id: $routeParams.id}, thing, function(data) {$location.path('/');}, function(data) {console.log("fail")});
        }
        // $log.info(data.id + ' has been dismissed.');
      });
    }*/

    $scope.yesDelete = function yesDelete(thing) {
      Things.repo.update({id: $scope.thing.id}, thing, function(data) {$location.path('/');}, function(data) {
        $scope.messages = data.data.errors;
        console.log("failAtyesDelete");
      });
    }

    $scope.noDelete = function noDelete() {
      $scope.dialogShown = false;
    }

  }

  activate();

  function activate() {
    if ($scope.tags.length === 0) {
      $scope.tags = api.userTagsDistinct();
    }
  }

})


.controller('ThingsCreateCtrl', function ThingsDetailCtrl ($scope, $log, $controller, $routeParams, $location, ngDialog, api, Tags, Things) {
  'use strict';

  // extend ThingsCtrl
  $controller('ThingsBaseCtrl', { $scope: $scope });

  $scope.title = 'ThingDetail';
  $scope.thing = {name: '', description: '', tags: [], thingable: {id: '', uri: ''}};
  $scope.tags = $scope.tags || [];


  $scope.searchTags = function searchTags(keywords) {
    keywords = keywords ? keywords.split(' ') : [];
    return api.searchTags(keywords);
  }

  $scope.createThing = function createThing(thing) {
    Things.repo.save('', thing, function(data) {$location.path('/');}, function(data) {
      $scope.messages = data.data.errors;
    });
  };

  $scope.cancel = function cancel() {
    $location.path('/');
  };

  activate();

  function activate() {
    if ($scope.tags.length === 0) {
      $scope.tags = api.userTagsDistinct();
    }
  }

});

