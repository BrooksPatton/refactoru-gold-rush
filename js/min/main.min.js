// callback function
var setFlag = function setFlag(event) {
	x = ((event.pageX)/width)*100;
	y = ((event.pageY)/height)*100;
	
	note = $('<div class="note"><textarea></textarea><button>Save note</button></div>');
	flag = $('<div data-index='+flagIndex+' data-x=' + x +' data-y=' +  y +'>');
	flag.addClass('marker');
	flag.css({
		top: y + '%',
		left: x + '%'
	});
	if( $(event.target).hasClass('marker')) {
		$(event.target).remove();
		$('.note').remove();
		hideNote();
	}
	else if(!($('.container').has($('.note')).length)) {
		$(this).append(flag);
		flagIndex++
		$(this).append(note);
	}
}

var showNote = function showNote() {
	var popup = $('<div class="sexyPopup"><p>' + messages[$(this).data().index] + '</p></div>');

	// console.log(messages[$(this).data().y]);
	if(messages[$(this).data().index] !== undefined) {
		$(this).after(popup);
		$(popup).css({
			position:'absolute',
			top: $(this).data().y +'%',
			left: $(this).data().x + '%',
			margin: '10px'
		});
  }
}

var hideNote = function hideNote() {
	$('.sexyPopup').remove();
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
  	messages.push($(this).closest('.note').find('textarea').val());
  	$('.note').remove();
  })

  $('.container').on('mouseover', '.marker', showNote);
  $('.container').on('mouseleave', '.marker', hideNote);

});