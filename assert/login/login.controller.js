define([
    './module'
], function (ng) {
    'use strict';

    ng.controller('loginCtrl', ['$scope', function ($scope) {
        $scope.local = function () {
            alert('Hello');
        };
    }]);
});