/**
 * Created by Vittorio on 01/08/2016.
 */
angular.module('users').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/', {
            templateUrl: 'index.html'
        });
    }
]);