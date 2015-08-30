$('document').ready(function(){
	$('#open_button').click(function(){
		
		// $('#textarea_lbl').css('visibility','visible');
		// $('#textarea_txt').css('visibility','visible');
		$('#textarea_lbl').css('opacity','1');
		$('#textarea_txt').css('opacity','1');


		$('#age_txt').css('visibility','hidden');
		$('#name_txt').css('visibility','hidden');
		$('#age_lbl').css('visibility','hidden');
		$('#name_lbl').css('visibility','hidden');
		return false;

	});

	// $('button#dropdownMenu1').click(function(){
	// 	var len = $(this).next().children('li').text();
	// 	// console.log(len);

	// 	$(len).click(function(){

	// 	});
	// });

	$('button#dropdownMenu1 + ul > li').click(function() {
		var txt = $(this).text();
		// var x = $(this).parents('button').text();
		console.log(ee);
		$(this).parent().siblings('button').text(txt).append('<span class="caret"></span>');
	});

});