/*
$("#smart").click(function(e){
    e.preventDefault();
        //alert('clicked');
        $.ajax({
            url: "http://localhost:3000/latestUser", 
            type: "GET",
            beforeSend: function(){

            },
            success: function(result){
            $("#div1").html(result);
        }});
});
*/

//$(document).ready(function(){
//	alert('test');

	    $("a").click(function(e){
	    	e.preventDefault();
			// alert($(this).attr('value'));
			 var val = $(this).attr('value');

			 alert(val);

	        $.ajax({
	            url: "http://localhost:3000/latestUser", 
	            type: "GET",
	            //data: 
	            beforeSend: function(){

	            },
	            success: function(result){
	            $("#div1").html(result);
	        }});
		});
//	});