angular.module("ipsProject").controller("habilidadeCtrl", function($scope,habilidadesAPI,$location){
        $scope.habilidades = [];
        var carregarHabilidades = function(){
                habilidadesAPI.getHabilidades().success(function(data){
                       $scope.habilidades =data;
                });    
        }; 

        $scope.cadastrarHabilidade = function(habilidade){            
            habilidadesAPI.postCadastrarHabilidade(habilidade).success(function(data){
               delete $scope.habilidade;
                $scope.formCadastroHabilidade.$setPristine();
                $location.path("/habilidade");
            }); 
        };
        carregarHabilidades();      
});