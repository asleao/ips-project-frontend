angular.module("ipsProject").service("habilidadesAPI",function($http, config){
  
   this.getHabilidades = function(){
        return $http.get(config.baseUrl + "/habilidade/?format=json");
    };

    this.getHabilidade = function(id){
        return $http.get(config.baseUrl + "/habilidade/"+id+"/?format=json");
    };

     this.postCadastrarHabilidade = function(habilidade){
        return $http.post(config.baseUrl +"/habilidade/?format=json",habilidade);
    };   
});