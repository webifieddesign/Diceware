function getRandomInt() {
  return Math.floor(Math.random() * passwords.length);
}

function getRandomString() {
	return passwords[getRandomInt()][1];	
}

$( document ).ready(function() {
    
	$(document).on('click', '#generate', function() {
  		var html = '<li>';
  		html += getRandomString();
  		html += '<a class="close" href="#">x</a></li>';
  		
  		$('#password-list').append(html);
	});

	$( '#password-list' ).on('click', '.close', function() {
		var listItem = $(this).parent('li');
		listItem.addClass('animated bounceOutLeft').one('webkitAnmiationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			listItem.removeClass('anmated bounceOutLeft');
		}).delay(300).queue(function(){
			listItem.remove().dequeue();
		});
	});
});