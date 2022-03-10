(function (app) {
    app.controller('loginController', loginController);
    loginController.$inject = ['$scope', '$state','checkLogin'];
    function loginController($scope, $state, checkLogin) {
       
        const loginButton = document.getElementById("login-form-submit");
        const loginForm = document.getElementById("login-form");
        //const email = document.getElementById("email-field").value;
        //const password = document.getElementById("password-field").value;
        loginButton.addEventListener("click", (e) => {
             e.preventDefault(); // không cho gửi form khi nhấn vào submit
             checkLogin.check($scope.email, $scope.password);
        });

        loginButton.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
                checkLogin.check($scope.email, $scope.password);
            }
        });
    }

    app.factory('checkLogin', function ($state) {
       
        function check(email,password) {
            if (email == "anktan26@gmail.com" && password == "xanhau05") {            
                /*alert("đăng nhập thành công");*/
                $state.go('home');
            }
            else {             
                document.getElementById("invalid-login").innerHTML = "Sai tài khoản mật khẩu";
            }
        }
        return {
            check: check
        }
       
    });
})(angular.module('liveStream'));