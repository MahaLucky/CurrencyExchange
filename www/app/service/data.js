angular.module('app')
    .factory('dataStor', ['$http', function($http){
       
		var baseUrl =  'https://currencyconverter.p.mashape.com/availablecurrencies'; 

		function searchResult(fromCurrency,fromAmount,toCurrency){
		
		return $http({        
           url:'https://currencyconverter.p.mashape.com/?from='+fromCurrency+'&from_amount='+fromAmount+'&to=' +toCurrency,
           method:'GET',		
           headers: {'X-Mashape-Key': 'FIWmEjTAfImshcbAjqzD4vWZ9cU2p1JUh18jsnpNW6Y058VJ12'}
        })       
    }
	 return {
            getResult: searchResult
        }
	}
	]);