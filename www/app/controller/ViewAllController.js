angular.module('app').controller('ViewAllController', ['$scope', '$rootScope',function($scope,$rootScope) {
	
		if($rootScope.wordsAdded)
				 $scope.historyWords = $rootScope.wordsAdded;
				 
		$scope.archive= function(){
		$('input[type="checkbox"]:checked').closest("ul").remove();
		}
 }]);

