angular.module("ipsProject").controller("ferramentaCtrl", function($scope,categoriasAPI,ferramentasAPI,$location){
        $scope.ferramentas = [];   
        $scope.categorias=[];     
        var carregarFerramentas = function(){
                ferramentasAPI.getFerramentas().success(function(data){
                       $scope.ferramentas =data;
                });    
        }; 
        var carregarCategorias = function(){
                categoriasAPI.getCategorias().success(function(data){
                       $scope.categorias =data;
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
        carregarCategorias();            
        $(document).ready(function() {
                $('select').material_select();                                
        });           

});

