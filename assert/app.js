define([
    'angular',
    'ui-router',

    // Customatic module
    './login/load'
], function (angular) {
    'use strict';

    

    return angular.module('app', ['ui.router', 'app.login']);
});