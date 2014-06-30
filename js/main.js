// callback function
var setFlag = function setFlag(event) {
	x = ((event.pageX)/width)*100;
	y = ((event.pageY)/height)*100;
	
	note = $('<div class="note"><textarea></textarea><button>Save note</button></div>');
	flag = $('<div data-index='+flagIndex+'>');
	flag.addClass('marker');
	flag.css({
		top: y + '%',
		left: x + '%'
	});
	if( $(event.target).hasClass('marker')) {
		$(event.target).remove();
		$('.note').remove();
	}
	else if(!($('.container').has($('.note')).length)) {
		$(this).append(flag);
		flagIndex++
		$(this).append(note);
	}
}

var messages= [];
var flagIndex = 0;
var width = $('.container').width();
var height = $('.container').height();
var x, y, flag, note;

$(document).on('ready', function() {

  $('.container').on('click', setFlag)
  
  $(window).on('resize', function() {
  	width = $('.container').width();
  	height = $('.container').height();
  })

  $(document).on('click', '.note button', function() {
  	console.log($(this).closest('.note').find('textarea'));
  	messages.push($(this).closest('.note').find('textarea').val());
  	$('.note').remove();
  })

});