
app.directive("mouseTracker", ["$window", function($window){

  var setHandlers = function(scope, element) {
    angular.element("document").on("mouseup", function() {
      angular.element(".mouse-position").text("UP");
    });

    angular.element("document").on("mousedown", function() {
      angular.element(".mouse-position").text("DOWN");
    });

    angular.element(".mouse-hover").mouseenter(function() {
      angular.element(".mouse-hover").text("MARTY MCFLY");
    });

    angular.element(".mouse-hover").mouseleave(function() {
      angular.element(".mouse-hover").text("OUT");
    });

  };

  return {
    templateUrl: "shared/mouseTracker/mouseTracker.html",
    restrict: "E",
    scope: {},
    link: setHandlers
  };

}]);
