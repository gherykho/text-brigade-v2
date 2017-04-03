
$(document).ready(function(){
alert('test');



$('a').click(function(e){
 e.preventDefault();
 
 //var val = document.getElementsByTagName("a")[0].getAttribute("id");
 
 var val = $('a').attr('id');
 alert(val);
 

});

});