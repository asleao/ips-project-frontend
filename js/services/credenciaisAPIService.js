angular.module("ipsProject").service("credenciaisAPI",function($http, config){
  
   this.getCredenciais = function(){
        return $http.get(config.baseUrl + "/credencial/?format=json");
    };

    this.getCredencial = function(id){
        return $http.get(config.baseUrl + "/credencial/"+id+"/?format=json");
    };

     this.postCadastrarCredencial = function(credencial){
        return $http.post(config.baseUrl +"/credencial/?format=json",credencial);
    };   
});