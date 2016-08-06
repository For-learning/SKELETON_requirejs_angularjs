define([
    'angular',
    './routes'
], function (angular) {
    'use strict';

    // Bootstrap angular while all resource loaded.
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
});