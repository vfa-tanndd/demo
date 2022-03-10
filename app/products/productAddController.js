(function (app) {
    app.controller('productAddController', productAddController);
    productAddController.$inject = ['$scope', '$http', '$state','notificationService'];

    function productAddController($scope, $http, $state, notificationService) {
        $scope.AddProduct = AddProduct;
        $scope.uploadFile = uploadFile;
        
        $scope.SelectFile = function (e) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $scope.PreviewImage = e.target.result;
                $scope.product.ImageView = e.target.result;
                $scope.$apply();
            };
            reader.readAsDataURL(e.target.files[0]);
        };
        function uploadFile() {
            $('#filePath').on('change', function () {
                var filePath = $(this).val();
                $scope.ImageView = filePath;
            });
        }
        function AddProduct() {
            $http.post('http://127.0.0.1:8097/api/Customers/PostCustomer', $scope.product)
                .then(function (response) {
                    notificationService.displayInfo("Thêm dữ liệu thành công");
                    $state.go('products');
                    console.log("OK:", response.data);
                }).catch(function (response) {
                    notificationService.displayError("Thêm không thành công");
                    console.log("ERROR:", response);
                });
        }
        /*uploadFile();*/
        //function chooseImage() {
        //    CKFinder.popup({
        //        chooseFiles: true,
        //        width: 800,
        //        height: 600,
        //        onInit: function (finder) {
        //            finder.on('files:choose', function (evt) {
        //                var file = evt.data.files.first();

        //                $scope.product.ImageView = file.getUrl();
        //            });
        //        }
        //    });
        //}
        
    }
})(angular.module('liveStream.products'));