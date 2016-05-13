angular.module("ipsProject").controller("projetoCtrl", function($scope,projetosAPI,projetos){
    $scope.projetos= projetos.data;      
});