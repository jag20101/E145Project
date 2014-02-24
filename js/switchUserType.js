$('.btn-corporate').click(function(){
	event.preventDefault();
	$(".btn-corporate").toggleClass('btn-corporate btn-corporate_s');
	$(".btn-seeker_s").toggleClass('btn-seeker_s btn-seeker');
	$('.seeker_form_container').css('display', 'none');
	$('.corp_form_container').css('display', '');

});

$('.btn-seeker_s').click(function(){
	event.preventDefault();
	$(".btn-seeker").toggleClass('btn-seeker btn-seeker_s');
	$(".btn-corporate_s").toggleClass('btn-corporate_s btn-corporate');
	$('.seeker_form_container').css('display', '');
	$('.corp_form_container').css('display', 'none');


});
