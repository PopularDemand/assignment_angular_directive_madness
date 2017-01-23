
app.directive("quotesIndex", function(){

  return {
    templateUrl: "components/quotes/index/quotesIndex.html",
    restrict: "AE",
    scope: {
      quoteMessage: '@',
      quoteAuthor: '@'
    }
  };

});
