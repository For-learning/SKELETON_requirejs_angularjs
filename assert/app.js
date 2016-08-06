define([
    'angular',
    'ui-router',

    // Customatic module
    './login/load',
    './dashboard/load',
    './question/load'
], function (angular) {
    'use strict';

    return angular.module('app', ['ui.router', 'app.login', 'app.dashboard', 'app.question']);
});