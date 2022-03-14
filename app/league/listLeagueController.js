(function (app) {
    app.controller('listLeagueController', listLeagueController);
    listLeagueController.$inject = ['$scope', '$http', '$timeout', '$q','$log'];
    function listLeagueController($scope, $http, $timeout, $q, $log) {
        $scope.league = [];
        $scope.getLeague = getLeague;
        $scope.loadContries = loadContries;
        $scope.isShow = true;
        var countries = ['tan','tra'];
        function getLeague() {
            $http({
                method: 'get',
                url: 'https://v3.football.api-sports.io/leagues',
                params: {
                    season:"2021"
                },
                headers: {
                    'x-rapidapi-key': 'fc66c27598c775fd929dd782175b9b6d',
                    'x-rapidapi-host': 'v3.football.api-sports.io'
                }
            }).then(function (response) {
                $scope.league = response.data.response;
                $scope.isShow = false;
                console.log("OK:", response.data.response);
                console.log("OK:", response.data);

            }).catch(function (response) {
                console.log("ERROR:", response);
            });
        }

        // search
        /*var $scope = this;*/

        $scope.simulateQuery = false;
        $scope.isDisabled = false;

        // list of `state` value/display objects
        $scope.states = loadAll();
        $scope.querySearch = querySearch;
        $scope.selectedItemChange = selectedItemChange;
        $scope.searchTextChange = searchTextChange;

        $scope.newState = newState;

        function newState(state) {
            alert("Sorry! You'll need to create a Constitution for " + state + " first!");
        }

        // ******************************
        // Internal methods
        // ******************************

        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch(query) {
            var results = query ? $scope.states.filter(createFilterFor(query)) : $scope.states,
                deferred;
            if ($scope.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }

        /**
         * Build `states` list of key/value pairs
         */
        function loadContries() { 
            // lấy dữ liệu các nước
            
            $http({
                method: 'get',
                url: 'https://v3.football.api-sports.io/countries',
                headers: {
                    'x-rapidapi-key': 'fc66c27598c775fd929dd782175b9b6d',
                    'x-rapidapi-host': 'v3.football.api-sports.io'
                }
            }).then(function (response) {
                for (var i = 0; i < 10; i++) {
                    countries.push(response.data.response[i].name);
                }
            }).catch(function (response) {
                console.log("ERROR:", response);
            });
        }
       
        function loadAll() {
            var listCountries = countries;
            var allStates = ['dự', 'tân', 'tuấn', 'ádasdas'];
            allStates = allStates.concat(countries);
            console.log("allStates:", allStates);
            console.log("listCountries:", listCountries);
            return listCountries.map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = query.toLowerCase();

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };

        }



        // auto load
        getLeague();
        loadContries();
    }


})(angular.module('liveStream.league'));

