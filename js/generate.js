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
		$(this).parent('li').remove();
		console.log('close');
	});
});