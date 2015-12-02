angular.module('NotebaseApp', ['firebase', 'textAngular'])
    .controller('NotebaseController', function($scope, $firebaseObject) {
    	$scope.htmlContent = {};
		$scope.textAreaSetup = function($element){
		  $element.attr('ui-codemirror', '');
		};

        var ref = new Firebase("https://notebase.firebaseio.com");
		var syncObject = $firebaseObject(ref);
		syncObject.$bindTo($scope, "htmlContent");

    });
