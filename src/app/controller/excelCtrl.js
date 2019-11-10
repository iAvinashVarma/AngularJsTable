app.controller("excelCtrl", function tableCtrl(excelService, $scope, $timeout) {
    $scope.filename = function () {
        // dynamic filename
        return Math.random();
    };
});