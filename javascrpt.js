// JavaScript Document

$('#button').click(function(){
	var urlPart = $('#input').val();
  var url = 'https://meet.jit.si/' + urlPart;

	console.log(url); // just here for 'debugging'

  window.location.replace(url);
});