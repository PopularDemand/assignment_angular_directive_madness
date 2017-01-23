
app.directive("mouseTracker", ["$window", function($window){

  var setHandlers = function(scope, element) {

    angular.element(document).on("mouseup", function() {
      angular.element(document.querySelector(".mouse-position")).text("UP");
    });

    angular.element(document).on("mousedown", function() {
      angular.element(document.querySelector(".mouse-position")).text("DOWN");
    });

    angular.element(document.querySelector(".mouse-tracker")).on("mouseenter", function() {
      angular.element(document.querySelector(".mouse-hover")).text("HOVERIN'");
    });

    angular.element(document.querySelector(".mouse-tracker")).on("mouseleave", function() {
      angular.element(document.querySelector(".mouse-hover")).text("AWAY");
    });

    angular.element(document.querySelector(".btn-info")).on("dblclick", function() {
      angular.element(document.querySelector(".btn-info")).attr("value", "I'm dblclick");
    });

  };

  return {
    templateUrl: "shared/mouseTracker/mouseTracker.html",
    restrict: "E",
    scope: {},
    link: setHandlers
  };

}]);
