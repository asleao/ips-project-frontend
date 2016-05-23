angular.module("ipsProject").controller("credencialCtrl", function($scope,$location,credenciaisAPI,credenciais){
    $scope.credenciais= credenciais.data;     
    
    $scope.cadastrarCredencial = function(credencial){            
                credenciaisAPI.postCadastrarCredencial(credencial).success(function(data){
               delete $scope.credenciais;
                $scope.formCadastroCredencial.$setPristine();
                $location.path("/home");
            }); 
     }       
});