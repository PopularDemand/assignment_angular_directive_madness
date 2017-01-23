
app.controller("QuotesCtrl",
  ["$scope",
    function($scope){

      $scope.quoteParams = {};

      $scope.quotes = [];

      $scope.createQuote = function(isValid, form){
        if (isValid) {
          var quote = {};
          quote.message = $scope.quoteParams.message;
          quote.author = $scope.quoteParams.author;
          $scope.quotes.push(quote);
        }
        form.$setPristine();
        form.$setUntouched();
      };

}]);
