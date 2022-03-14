(function (app) {
    app.controller('detailLeagueController', detailLeagueController);
    detailLeagueController.$inject = ['$scope', '$http','$stateParams']
    function detailLeagueController($scope, $http, $stateParams) {
        $scope.ranks = [];
        
        $scope.isShow = true;
        $scope.getLeague = getLeague;
        function getLeague() {
            $http({
                method: 'get',
                url: 'https://v3.football.api-sports.io/standings',
                params: {
                    league: $stateParams.id,
                    season: "2021"
                },
                headers: {
                    'x-rapidapi-key': 'fc66c27598c775fd929dd782175b9b6d',
                    'x-rapidapi-host': 'v3.football.api-sports.io'
                }
            }).then(function (response) {
                $scope.ranks = response.data.response[0].league.standings[0];
                $scope.isShow = false;
                console.log("OK:", response.data.response[0].league.standings);

            }).catch(function (response) {
                console.log("ERROR:", response);
            });
        }
        // auto load
        getLeague();
        ///chào em
    }

    app.filter('form1Filter', function () {
        return function (input) {
            var arr = input.split("");
            return arr[0];
        }
    });
    app.filter('form2Filter', function () {
        return function (input) {
            var arr = input.split("");
            return arr[1];
        }
    });
    app.filter('form3Filter', function () {
        return function (input) {
            var arr = input.split("");
            return arr[2];
        }
    });
    app.filter('form4Filter', function () {
        return function (input) {
            var arr = input.split("");
            return arr[3];
        }
    });
    app.filter('form5Filter', function () {
        return function (input) {
            var arr = input.split("");
            return arr[4];
        }
    });
})(angular.module('liveStream.league'));