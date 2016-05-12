angular.module("ipsProject").controller("ferramentaCtrl", function($scope,categoriasAPI,ferramentasAPI,$location){
        $scope.ferramentas = [];        
        var carregarFerramentas = function(){
                ferramentasAPI.getFerramentas().success(function(data){
                       $scope.ferramentas =data;
                });    
        }; 
        $scope.cadastrarFerramenta = function(ferramenta){            
            ferramentasAPI.postCadastrarFerramenta(ferramenta).success(function(data){
               delete $scope.ferramenta;
                $scope.formCadastroFerramenta.$setPristine();
                $location.path("/ferramenta");
            }); 
        };
        carregarFerramentas();              
});