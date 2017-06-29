angular.module("spsnetTaskApp").controller("SimpleDemoController", function($scope) {
    $scope.example1model = [];
    $scope.example1data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"} ];
    $scope.checked=[]
    $scope.listsa={"A":[],"B":[],"C":[],"D":[]}
    $scope.models = {
        selected: null,
        lists: $scope.example1data
    };
    $(".grid").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        placeholder: 'span2 well placeholder tile',
        forceHelperSize: true
    });
    // Generate initial model
    $scope.k=0;
    for (var i = 1; i <= 3; ++i) {
        $scope.k=i;
        $scope.models.lists[i]={id: i+1, label: "David"+i};

    }

    $scope.insertList=function (data)
    {
        $scope.models.lists.push({i: $scope.k+1, label: "David"+$scope.k});
        $scope.k+=1;
    }
    $scope.dataFun=function (data)
    {
        $scope.models.lists.push({id: $scope.k+1, label: "David"+$scope.k});
    }
    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
    $scope.onDragComplete=function(data,evt){
        console.log("drag success, data:", data);
    }
    $scope.onDropComplete=function(data,evt){
        console.log("drop success, data:", data);
    }
   })


;