// callback function
var setFlag = function(event) {
	x = ((event.pageX)/width)*100;
	y = ((event.pageY)/height)*100;
	var flag = $('<div>');
	flag.addClass('marker');
	flag.css({
		top: y + '%',
		left: x + '%'
	});
	if( $(event.target).hasClass('marker') ) {
		$(event.target).remove();
	}
	else {
		$(this).append(flag);
	}


}

var width = $('.container').width();
var height = $('.container').height();
var x, y;

$(document).on('ready', function() {
  $('.container').on('click', setFlag)
  $(window).on('resize', function() {
  	width = $('.container').width();
  	height = $('.container').height();
  })

});