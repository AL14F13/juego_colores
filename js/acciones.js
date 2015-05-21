// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
		$('#uno').on('click', function(){
		navigator.vibrate(1000);
	    //alert('vibro')
	     $('#resultado').append('1');
		});
		
		$('#dos').on('click', function(){
	     navigator.vibrate(1000);
	     //alert('vibro')
		  $('#resultado').append('2');
		});
		
		$('#tres').on('click', function(){
		navigator.vibrate(1000);
	    //alert('vibro')
		 $('#resultado').append('3');
		});
		
		$('#cuatro').on('click', function(){
		navigator.vibrate(1000);
	    //alert('vibro')	
	     $('#resultado').append('4');
		});
	
	
//});
});
