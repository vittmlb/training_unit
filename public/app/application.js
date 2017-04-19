/**
 * Created by Vittorio on 15/04/2017.
 */

let mainAppModuleName = 'training_unit';
let mainAppModule = angular.module('training_unit', [
    'ngResource',
    'ngRoute',
    'users',
    'modelos',
    'toaster',
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'ngFileUpload',
    'ngAudio',
    'angularMoment',
    'angular-flot',
]);

mainAppModule.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

if(window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function () {
    angular.bootstrap(document, [mainAppModuleName]);
});