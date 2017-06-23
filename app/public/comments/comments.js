angular.module("spsnetTaskApp").controller("SimpleDemoController", function($scope) {

    $scope.listsa={"A":[],"B":[],"C":[],"D":[]}
    $scope.models = {
        selected: null,
        lists: $scope.listsa
    };
    $scope.models2 = {
        selected: null,
        lists: {"B":[]}
    };
 $scope.myview= function (item) {
     console.log('cliecked'+item.label)
 }
    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" });
        $scope.models.lists.C.push({label: "Item C" + i});

    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});