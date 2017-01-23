
app.directive("quoteForm", function() {

  var addHandlers = function(scope, element) {
    angular.element(document.querySelector(".quote-form"))
      .on("submit", function(e) {
        e.preventDefault();
        var quote = {
          message: quoteMessage,
          author: author
        };
        scope.quotes.push(quote);
      })
  };

  return {
    templateUrl: "components/quotes/form/quoteForm.html",
    restrict: "E",
    scope: true,
    link: addHandlers
  }
});