(function (app) {
    app.controller('rootController', rootController);
    rootController.$inject = ['$scope','$state'];
    function rootController($scope, $state) {
        $scope.logOut = logOut;
        function logOut() {
            $state.go('login');
        }
    }
})(angular.module('liveStream'));