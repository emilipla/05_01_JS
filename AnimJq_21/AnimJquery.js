$(document).ready(function(){
	$("#animar").click(function(e){
		e.preventDefault()
		$("h1").animate({   //parámetros,velocidad,easing, funcion callback
			'border-bottom-width': "20",
			'font-size': '25pt'
		});
	});
	$("#restaurar").click(function(e){
		e.preventDefault()
		$("h1").css({
			'border-bottom-width': "1px",
			'font-size': '15pt'
		});
	});
})
