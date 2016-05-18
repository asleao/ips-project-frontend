angular.module("ipsProject").controller("usuarioCtrl", function($scope, usuarioAPI,$location,$cookies){
        $scope.usuarios = [];        

        $scope.cadastrarUsuario = function(usuario){            
            usuarioAPI.postCadastrarUsuario(usuario).success(function(data){
               delete $scope.usuario;
                $scope.formCadastro.$setPristine();
                $location.path("/home");
            }); 
        };  

        $scope.login = function(usuario){ 
                var getCookie =$cookies.get('csrftoken');                       
                console.log({username: $scope.usuario.username,password:$scope.usuario.password});         
                usuarioAPI.postLogin($scope.usuario.username,$scope.usuario.password).success(function(data){
                    console.log(data);
                });             
        };     
});