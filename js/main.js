$(document).ready(function(){

	  $("#nota1").css('display','block');
  	  $("#nota2").css('display','none');
   	  $("#nota3").css('display','none');
	  $("#nota4").css('display','none');
	  $("#nota5").css('display','none');
	  $("#nota6").css('display','none');
	  $("#nota7").css('display','none');
	  $("#nota8").css('display','none');

	$( "#btn1" ).click(function(){

	  $("#nota1").fadeIn(2000); $("#nota1").css('display','block');
  	  $("#nota2").css('display','none');
  	  $("#nota3").css('display','none');
	  $("#nota4").css('display','none');
	  $("#nota5").css('display','none');
	  $("#nota6").css('display','none');
	  $("#nota7").css('display','none');
	  $("#nota8").css('display','none');

	});

	$( "#btn2" ).click(function(){

	  $("#nota1").css('display','none');
	  $("#nota2").fadeIn(2000);  $("#nota2").css('display','block'); //addClass('nombre de la clase que yo cree'), ejemplo div de historias.
	  $("#nota3").css('display','none');
	  $("#nota4").css('display','none');
	  $("#nota5").css('display','none');
	  $("#nota6").css('display','none');
	  $("#nota7").css('display','none');
	  $("#nota8").css('display','none');

	});


	$( "#btn3" ).click(function(){

	  $("#nota1").css('display','none');
  	  $("#nota2").css('display','none');
	  $("#nota3").fadeIn(2000); $("#nota3").css('display','block');
	  $("#nota4").css('display','none');
	  $("#nota5").css('display','none');
	  $("#nota6").css('display','none');
	  $("#nota7").css('display','none');
	  $("#nota8").css('display','none');

	});

$( "#btn4" ).click(function(){

	  $("#nota1").css('display','none');
  	  $("#nota2").css('display','none');
	  $("#nota3").css('display','none');
	  $("#nota4").fadeIn(2000); $("#nota4").css('display','block');
	  $("#nota5").css('display','none');
	  $("#nota6").css('display','none');
	  $("#nota7").css('display','none');
	  $("#nota8").css('display','none');

	});

$( "#btn5" ).click(function(){

	  $("#nota1").css('display','none');
  	  $("#nota2").css('display','none');
	  $("#nota3").css('display','none');
	  $("#nota4").css('display','none');
	  $("#nota5").fadeIn(2000); $("#nota5").css('display','block');
	  $("#nota6").css('display','none');
	  $("#nota7").css('display','none');
	  $("#nota8").css('display','none');

	});

$( "#btn6" ).click(function(){

	  $("#nota1").css('display','none');
  	  $("#nota2").css('display','none');
	  $("#nota3").css('display','none');
	  $("#nota4").css('display','none');
	  $("#nota5").css('display','none');
	  $("#nota6").fadeIn(2000); $("#nota6").css('display','block');
	  $("#nota7").css('display','none');
	  $("#nota8").css('display','none');

	});

$( "#btn7" ).click(function(){

	  $("#nota1").css('display','none');
  	  $("#nota2").css('display','none');
	  $("#nota3").css('display','none');
	  $("#nota4").css('display','none');
	  $("#nota5").css('display','none');
	  $("#nota6").css('display','none');
	  $("#nota7").fadeIn(2000); $("#nota7").css('display','block');
	  $("#nota8").css('display','none');

	});

$( "#btn8" ).click(function(){

	  $("#nota1").css('display','none');
  	  $("#nota2").css('display','none');
	  $("#nota3").css('display','none');
	  $("#nota4").css('display','none');
	  $("#nota5").css('display','none');
	  $("#nota6").css('display','none');
	  $("#nota7").css('display','none');
	  $("#nota8").fadeIn(2000); $("#nota8").css('display','block');

	});


});