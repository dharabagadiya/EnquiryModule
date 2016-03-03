// JavaScript Document$(document).ready(function(){
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('rel');

		$('ul.tabs li').removeClass('active');
		$('.tab_content').removeClass('active');

		$(this).addClass('active');
		$('#'+tab_id).addClass('active');
	})

})