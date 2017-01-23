app.directive('copyright', function() {

  var setYear = function() {
    var today = new Date();
    scope.year = today.getFullYear();
  };

  return {
    templateUrl: 'shared/copyright/copyright.html',
    restrict: 'E',
    transclude: true,
    scope: {},
    link: setYear
  }
})