(function (app) {
    app.controller('topLeagueController', topLeagueController);
    topLeagueController.$inject=['$scope','$http']
    function topLeagueController($scope, $http) {
        $scope.league = [];
        $scope.isShow = true;
        $scope.getLeague = getLeague;
        function getLeague() {
            $http({
                method: 'get',
                url: 'https://v3.football.api-sports.io/leagues',
                params: {
                    season: "2021"
                },
                headers: {
                    'x-rapidapi-key': 'fc66c27598c775fd929dd782175b9b6d',
                    'x-rapidapi-host': 'v3.football.api-sports.io'
                }
            }).then(function (response) {
                for (var i = 0; i < response.data.results; i++) {
                    if (response.data.response[i].league.id === 39 ||
                        response.data.response[i].league.id === 140 ||
                        response.data.response[i].league.id === 61 ||
                        response.data.response[i].league.id === 135 ||
                        response.data.response[i].league.id === 78)
                    {
                        $scope.league.push(response.data.response[i]);
                    }
                }
                $scope.isShow = false;
                console.log("OK:", $scope.league);

            }).catch(function (response) {
                console.log("ERROR:", response);
            });
        }
        // auto load
        getLeague();
    }
})(angular.module('liveStream.league'));