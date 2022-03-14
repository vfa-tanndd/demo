(function () {
    angular.module('liveStream.league', ['liveStream.common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('listLeague', {
            url: "/listLeague",
            parent: 'base',
            templateUrl: "/app/league/listLeagueView.html",
            controller: "listLeagueController"
        }).state('topLeague', {
            url: "/topLeague",
            parent: 'base',
            templateUrl: "/app/league/topLeagueView.html",
            controller: "topLeagueController"
        }).state('detailLeague', {
            url: "/detailLeague:id",
            parent: 'base',
            templateUrl: "/app/league/detailLeagueView.html",
            controller: "detailLeagueController"
        });
    }
})();