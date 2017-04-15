/**
 * Created by Vittorio on 01/08/2016.
 */
angular.module('users').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/', {
            templateUrl: 'index.html'
        });

        $stateProvider
            .state('css-helper-class', {
                url: 'modelos/css-helper-class',
                templateUrl: 'views/modelos/modelo-css-helper-class.client.view.html'
            });

    }
]);