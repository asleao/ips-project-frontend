angular.module("ipsProject").controller("projetoCtrl", function($scope,projetosAPI,projetos,ferramentas,pessoas){
    $scope.projetos= projetos.data;     
    $scope.ferramentas= ferramentas.data;
    $scope.pessoas=pessoas.data;     

    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'dd-mm-yyyy' });
});