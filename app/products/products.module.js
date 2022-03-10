(function () {
    angular.module('liveStream.products', ['liveStream.common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('products', {
            url: "/products",
            parent :'base',
            templateUrl: "/app/products/productListView.html",
            controller: "productListController"
        }).state('edit_product', {
            url: "/edit_product:id",
            parent: 'base',
            templateUrl: "/app/products/productEditView.html",
            controller: "productEditController"
        }).state('add_product', {
            url: "/add_product",
            parent: 'base',
            templateUrl: "/app/products/productAddView.html",
            controller: "productAddController"
        });

    }
})();