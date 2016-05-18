angular.module("ipsProject").controller("organizacaoCtrl", function($scope,organizacoesAPI,$location){
        $scope.organizacoes = [];
        var carregarOrganizacoes = function(){
                organizacoesAPI.getOrganizacoes().success(function(data){
                       $scope.organizacoes =data;
                });    
        }; 

        $scope.cadastrarOrganizacao = function(organizacao){            
            organizacoesAPI.postCadastrarOrganizacao(organizacao).success(function(data){
               delete $scope.organizacao;
                $scope.formCadastroOrganizacao.$setPristine();
                $location.path("/organizacao");
            }); 
        };
        carregarOrganizacoes();      
});