
app.directive("colorize", function(){

  var setColors = function(scope, element){
    element.css({
      backgroundColor: scope.background,
      color: scope.color
    });
  };

  return {
    restrict: "A",
    scope: {
      color: "@",
      background: "@"
    },
    link: setColors
  };

});
