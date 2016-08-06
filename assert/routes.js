define([
    './app'
], function (angular) {
    'use strict';

    return angular.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.tpl.html',
                controller: 'loginCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/dashboard.tpl.html',
                controller: 'dashboardCtrl'
            })
            // nested router
            // NOTE: This page will not view, then your need follow full of ui-route grammar.
            .state('dashboard.question', {
                url: '/question',
                templateUrl: 'question/question.tpl.html',
                controller: 'questionCtrl'
            });
    });

});