
app.controller("QuotesCtrl",
  ["$scope",
    function($scope){

      $scope.quoteParams = {};

      $scope.quotes = [{
        message: "where's the beef?",
        author: "Wendy"
      }];

      $scope.createQuote = function(){
        var quote = {};
        quote.message = $scope.quoteParams.message;
        quote.author = $scope.quoteParams.author;
        $scope.quotes.push(quote);
      };
}]);
