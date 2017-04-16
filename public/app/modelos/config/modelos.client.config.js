/**
 * Created by Vittorio on 15/04/2017.
 */
angular.module('modelos').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('modelos_dashboard_1', {
            url: '/modelos/dashboard_1',
            templateUrl: 'app/modelos/views/modelo-dashboard-v1.client.view.html',
            controller: 'ModelosControllers'
        });
}]);