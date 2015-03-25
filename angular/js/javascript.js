angular.module ("AutoData", ['ngSanitize', 'ngMaterial'])
.controller ('NameController', function(){
	var self = this;
	this.ButtonEnviar = {};
	this.Input = function(){
		$http.get ("http://api.labcd.mx/v1/movilidad/vehiculos/", {})
		.success (function(data){
			self.datos = data;
		})
		.error (function(){
			alert ('Error! los datos no se cargaron correctamente')
		});
	};

});