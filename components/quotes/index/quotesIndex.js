
app.directive("quotesIndex", function(){

  return {
    templateUrl: "components/quotes/index/quotesIndex.html",
    restrict: "AE",
    scope: {
      quoteMessage: "@",
      quoteAuthor: "@",
      quotes: "=",
      quote: "="
    },
    link: function(scope){
      scope.deleteQuote = function(quote){
        console.log(quote);
        var index = scope.quotes.indexOf(quote);
        scope.quotes.splice(index, 1);
      };
    }
  };

});
