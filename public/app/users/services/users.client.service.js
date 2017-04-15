/**
 * Created by Vittorio on 15/04/2017.
 */
angular.module('users').factory('Users', ['$resource', function ($resource) {
    return $resource('/api/users/:userId', {
        userId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);