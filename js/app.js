angular.module("ipsProject",["ngMessages","ngRoute","ngCookies"]);
angular.module("ipsProject").config(function($httpProvider){      
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';         
});

$(document).ready(function() {
        $('select').material_select();
});
  