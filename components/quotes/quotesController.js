
app.controller("QuotesCtrl",
  ["$scope",
    function($scope){

      var id = 1;

      $scope.quotes = [];

      $scope.createQuote = function(){
        event.preventDefault();
        var quote = {};
        quote.id = id;
        quote.message = $scope.quoteMessage;
        quote.author = $scope.quoteAuthor;
        $scope.quotes.push(quote);

console.log(quote);

        id++;
      };
}]);
