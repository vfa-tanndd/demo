
(function (app) {
    app.factory('apiService', apiService);
    apiService.$inject = ['$http'];
    // viết hàm
    function apiService($http) {
        return {
            get: get,
            post: post,
            put: put,
            del: del
        }
        // get data
        function get(url, params, success, failure) {
            $http.get(url, params).then(function (result) {
                success(result);
            }, function (error) {
                failure(error);
            });
        }
    }
})(angular.module('liveStream.common'));