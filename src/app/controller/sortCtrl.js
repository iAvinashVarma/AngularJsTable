app.controller("sortCtrl", function tableCtrl($scope) {
    $scope.setSortKey = function(keyname){
        $scope.sortKey = keyname; 
    };
    $scope.sort = function (keyname) {
        $scope.setSortKey(keyname); //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.sortNumericClass = function(reverse) {
        return {'fa-sort-numeric-up':reverse,'fa-sort-numeric-down':!reverse};
    }
    $scope.sortAmountClass = function(reverse){
        return {'fa-sort-amount-up':reverse,'fa-sort-amount-down':!reverse};
    }
    $scope.sortAlphaClass = function(reverse){
        return {'fa-sort-alpha-up':reverse,'fa-sort-alpha-down':!reverse};
    }
});