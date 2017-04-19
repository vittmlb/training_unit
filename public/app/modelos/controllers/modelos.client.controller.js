/**
 * Created by Vittorio on 15/04/2017.
 */
angular.module('modelos').controller('ModelosControllers', ['$scope', '$location', '$stateParams', 'Modelos', 'MyFlot', 'MyChartJs',
    function($scope, $location, $stateParams, Modelos, MyFlot, MyChartJS) {
        $scope.load = function() {
            $scope.flot = {
                dataset: MyFlot.flotData(),
                options: MyFlot.flotOptions()
            };
            $scope.chart = {
                
            };
        }();



    }
]);