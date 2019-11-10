app.controller("tableCtrl", function tableCtrl($scope) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.items = [];
    $scope.sortKey = 'Id';
    for (var i = 0; i < 1000; i++) {
        var idStr = (i < 10 ? "0" + i : i).toString();
        var nameStr = String.fromCharCode(65 + i); //gets alphabet chars
        var priceStr = (Math.random() * 100).toFixed(2);
        var qty = Math.floor(Math.random() * (25 - 1 + 1) + 1);
        $scope.items.push({
            Id: idStr,
            Name: nameStr + "vi",
            Price: priceStr,
            Info: {
                Quantity: qty
            },
            Description: "This is the description for item " + nameStr + ".",
            selected: false
        });
    }
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname; //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.noitems = [];

    $scope.clickRow = function () {
        alert('You clicked the row.');
    }

    function swapBeforeAndAfterDecimal(number) {
        var beforeDecimal = Math.floor(number).toString();
        var afterDecimal = number.toString().replace(/.*\./, '');

        return afterDecimal + '.' + beforeDecimal;
    }

    $scope.centsThenDollars = function (a, b) {
        var aSwapped = swapBeforeAndAfterDecimal(a);
        var bSwapped = swapBeforeAndAfterDecimal(b);

        if (aSwapped > bSwapped) {
            return 1;
        } else if (aSwapped === bSwapped) {
            return 0;
        } else {
            return -1;
        }
    }
});