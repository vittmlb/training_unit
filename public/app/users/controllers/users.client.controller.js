/**
 * Created by Vittorio on 15/04/2017.
 */
angular.module('users').controller('UsersController', ['$scope', '$location', '$stateParams', 'Users',
    function($scope, $location, $stateParams, Users) {
        $scope.create = function() {
            let user = new Users({
                nome: this.nome
            });
            user.$save(function (response) {
                $location.path('/users/' + response._id);
            }, function(errorResponse) {
                console.log(errorResponse);
            });
        };
        $scope.find = function() {
            $scope.users = Users.query();
        };
        $scope.findOne = function() {
            $scope.user = Users.get({
                userId: $stateParams.userId
            });
        };
        $scope.update = function() {
            $scope.user.$update(function (response) {
                $location.path('/users/' + response._id);
            }, function(errorResponse) {
                console.log(errorResponse);
            });
        };
        $scope.delete = function() {
            $scope.user.$remove(function () {
                $location.path('/users');
            }, function(errorResponse) {
                console.log(errorResponse);
            });
        };
    }
]);