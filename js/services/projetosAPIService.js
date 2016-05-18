angular.module("ipsProject").service("projetosAPI",function($http, config){
  
   this.getProjetos = function(){
        return $http.get(config.baseUrl + "/projeto/?format=json");
    };

    this.getProjeto = function(id){
        return $http.get(config.baseUrl + "/projeto/"+id+"/?format=json");
    };

     this.postCadastrarProjeto = function(projeto){
        return $http.post(config.baseUrl +"/projeto/?format=json",projeto);
    };   

    this.getPessoas = function(){
        return $http.get(config.baseUrl + "/pessoas/?format=json");
    };

    this.getPessoa = function(id){
        return $http.get(config.baseUrl + "/pessoas/"+id+"/?format=json");
    };
});