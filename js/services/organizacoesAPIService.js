angular.module("ipsProject").service("organizacoesAPI",function($http, config){
  
   this.getOrganizacoes = function(){
        return $http.get(config.baseUrl + "/organizacao/?format=json");
    };

    this.getOrganizacao = function(id){
        return $http.get(config.baseUrl + "/organizacao/"+id+"/?format=json");
    };

     this.postCadastrarOrganizacao = function(organizacao){
        return $http.post(config.baseUrl +"/organizacao/?format=json",organizacao);
    };   
});