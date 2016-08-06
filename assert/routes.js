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
            // .state('login', {
            //     url: '/login',
            //     templateUrl: 'login/login.tmp.html',
            //     controller: 'loginCtrl'
            // });
    });

});