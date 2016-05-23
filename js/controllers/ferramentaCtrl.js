angular.module("ipsProject").controller("ferramentaCtrl", function($scope,credenciaisAPI,categoriasAPI,ferramentasAPI,$location,categorias,credenciais,ferramentas){
        $scope.ferramentas = ferramentas.data;   
        $scope.categorias=categorias.data;     
        $scope.credenciais=credenciais.data;
        
        $scope.cadastrarFerramenta = function(ferramenta){                   
            ferramentasAPI.postCadastrarFerramenta(ferramenta).success(function(data){
               delete $scope.ferramenta;
                $scope.formCadastroFerramenta.$setPristine();
                $location.path("/ferramenta");
            }); 
        };
             
        $(document).ready(function() {
                $('select').material_select();                                
        });           

});

