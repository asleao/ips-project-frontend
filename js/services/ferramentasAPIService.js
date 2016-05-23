angular.module("ipsProject").service("ferramentasAPI",function($http, config){
  
   this.getFerramentas = function(){
        return $http.get(config.baseUrl + "/ferramenta/?format=json");
    };

    this.getFerramenta = function(id){
        return $http.get(config.baseUrl + "/ferramenta/"+id+"/?format=json");
    };

     this.postCadastrarFerramenta = function(ferramenta){
        return $http.post(config.baseUrl +"/ferramenta/?format=json",{id:ferramenta.id,nome:ferramenta.nome,link:ferramenta.link,categoria:ferramenta.categoria.id,credencial:ferramenta.credencial.id});
    };   
});