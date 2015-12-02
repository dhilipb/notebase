angular.module('NotebaseApp', ['firebase'])
    .controller('NotebaseController', function($scope, $firebaseObject) {
    	$scope.htmlContent = {content: ""};

        var ref = new Firebase("https://notebase.firebaseio.com");
		var syncObject = $firebaseObject(ref);
		syncObject.$bindTo($scope, "htmlContent");

    });
