angular.module('app')
    .controller('ConvertController', ['$scope', '$rootScope', 'dataStor', function ($scope, $rootScope, dataStor) {
	
    	$scope.find = function(){
    		$scope.toAmount = 0;
			
			dataStor.getResult($scope.fromCurrency,$scope.fromAmount,$scope.toCurrency).then(function(response){
				$scope.toAmount = response.data.to_amount;
				$('#convertedAmount').removeClass('display_none');
				$('#convertedAmount').addClass('display_visible');
			});
		},
		$scope.hideConvert = function(){
			$('#convertedAmount').removeClass('display_visible');
			$('#convertedAmount').addClass('display_none');
		},
		$scope.addTo = function(){
		    
                if(!$rootScope.wordsAdded){	
					$rootScope.wordsAdded = [];		
			    }
				$scope.listTemp = {};	
				$scope.listTemp["fromCurrency"] = $scope.fromCurrency;
				$scope.listTemp["fromAmount"] = $scope.fromAmount;
				$scope.listTemp["toCurrency"] = $scope.toCurrency;
				$scope.listTemp["toAmount"] = $scope.toAmount;
				$rootScope.wordsAdded.push($scope.listTemp);
				alert('Search Result has been added to History.');			
		}
	
    }]);