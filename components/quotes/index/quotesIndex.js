
app.directive("quotesIndex", function(){

  return {
    templateUrl: "components/quotes/index/quotesIndex.html",
    restrict: "E",
    scope: {
      quote: "@"
    }
  };

});
