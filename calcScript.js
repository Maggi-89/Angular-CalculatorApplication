var app = angular.module("calcApp", []);
app.controller("CalCtrl", CalCtrl);

function CalCtrl($scope) {
    var operator = "" ;
    $scope.showOperator = function() {
        console.log("Button clicked");
        operator = "Button +";
    }
}