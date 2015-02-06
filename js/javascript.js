$(document).on('ready',
	function(){
		$('a').on('click',
			function(){
				$('#container-data').css({display:"block"});
					TweenMax.to ('#text',1,{opacity:0});
					TweenMax.fromTo ('#container-data',1,{y: -50, opacity:0},{y: 0, opacity:1, ease: Bounce.easeOut});
				var placas = $('#placas').val()
				console.log("http://datos.labplc.mx/movilidad/vehiculos/"+placas+".json");
				$('h1').append('<span>'+placas+'</span>');
				console.log('tus placas son:'+$('#placas').val());
				$.get("http://datos.labplc.mx/movilidad/vehiculos/"+placas+".json", {},function(data){

					var totalInfracciones = data.consulta.infracciones.length;
					$('.infracciones').append('<span>'+totalInfracciones+'</span>');
					for (var i = 0; i < totalInfracciones; i++){
						console.log (data.consulta.infracciones[i]);
						var infraccion = data.consulta.infracciones[i];
						$('.infracciones').append('<p>Folio: '+infraccion.folio+'</p>');
						$('.infracciones').append('<p>Fecha: '+infraccion.fecha+'</p>');
						$('.infracciones').append('<p>Sancion: '+infraccion.sancion+'</p>');
						$('.infracciones').append('<p>Motivo: '+infraccion.motivo+'</p>');
						$('.infracciones').append('<p>Fundamento: '+infraccion.fundamento+'</p>');
						$('.infracciones').append('<p>Situacion: '+infraccion.situacion+'</p>');
					}
					var totalVerificaciones = data.consulta.verificaciones.length;
					$('.verificaciones').append('<span>'+totalVerificaciones+'</span>');
					for (var i = 0; i < totalVerificaciones; i++){
						console.log (data.consulta.verificaciones[i]);
						var verificacion = data.consulta.verificaciones[i];
						$('.verificaciones').append('<p>Cancelado: '+verificacion.cancelado+'</p>');
						$('.verificaciones').append('<p>Causa rechazo: '+verificacion.causa_rechazo+'</p>');
						$('.verificaciones').append('<p>Certificado: '+verificacion.certificado+'</p>');
						$('.verificaciones').append('<p>Combustible: '+verificacion.combustible+'</p>');
						$('.verificaciones').append('<p>Equipo gdf: '+verificacion.equipo_gdf+'</p>');
						$('.verificaciones').append('<p>Fecha verificacion: '+verificacion.fecha_verificacion+'</p>');
						$('.verificaciones').append('<p>Hora verificacion: '+verificacion.hora_verificacion+'</p>');
						$('.verificaciones').append('<p>Linea: '+verificacion.linea+'</p>');
						$('.verificaciones').append('<p>Marca: '+verificacion.marca+'</p>');
						$('.verificaciones').append('<p>Modelo: '+verificacion.modelo+'</p>');
						$('.verificaciones').append('<p>Placa: '+verificacion.placa+'</p>');
						$('.verificaciones').append('<p>Resultado: '+verificacion.resultado+'</p>');
						$('.verificaciones').append('<p>Submarca: '+verificacion.submarca+'</p>');
						$('.verificaciones').append('<p>Verificentro: '+verificacion.verificentro+'</p>');
						$('.verificaciones').append('<p>Vigencia: '+verificacion.vigencia+'</p>');
						$('.verificaciones').append('<p>Vin: '+verificacion.vin+'</p>');
					}
					var totalTenencias = data.consulta.tenencias.length;
					$('.tenencias').append('<span>'+totalTenencias+'</span>');
					for (var i = 0; i < totalTenencias; i++){
						console.log (data.consulta.tenencias[i]);
					}
				},"jsonp");
			});
		$('.return').on('click',
			function(){
				TweenMax.fromTo ('#container-data',1,{y: 0, opacity:1},{y: -50, opacity:0, ease: Back.easeIn});
				TweenMax.to ('#text',1,{opacity:1});
			});
	});