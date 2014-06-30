// callback function
var setFlag = function(event) {
	var x = event.pageX;
	var y = event.pageY;
	var flag = $('<div>');
	flag.addClass('marker');
	flag.css({
		top: y,
		left: x
	});
	$('.container').append(flag);
}

$(document).on('ready', function() {
  $('.topo-map').on('click', setFlag)
});