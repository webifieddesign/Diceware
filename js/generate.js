var passwordArray = [];

function getRandomInt() {
  return Math.floor(Math.random() * passwords.length);
}

function getRandomString() {
	return passwords[getRandomInt()][1];	
}

$( document ).ready(function() {
    
	$( "#generate" ).on( "click", function() {
  		var html = '<div draggable="true" class="list-item"><li>';
  		html += getRandomString();
  		html += "</li></div>";
  		$('#password-list').append(html);


	});

});