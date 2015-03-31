
$( document ).ready(function() {

	$(document).on('click', '#generate', function() {
  		addListItem();
  		dragListener();
	});

	$(document).on('click', 'li a', function() {
		var listItem = $(this).parent('li');
		listItem.addClass('animated zoomOut').delay(500).queue(function(){
			listItem.remove().dequeue();
			dragListener();
		});
	});

		dragListener();

});
var dragSrcEl = null;

var addListItem = function(){
	var html = '<li draggable="true" class="drag">';
	html += getRandomString();
	html += '<a class="close" href="#">X</a></li>';

	return $('#password-list').append(html);
}

function getRandomString() {
	var randomInt = Math.floor(Math.random() * passwords.length);
	return passwords[randomInt][1];	
}

// DRAG HANDLERS

var dragListener = function(){
	var items = $('#password-list .drag').toArray();

	$.each(items, function(index, value) {
	  value.addEventListener('dragstart', handleDragStart, false);
	  value.addEventListener('dragenter', handleDragEnter, false);
	  value.addEventListener('dragover', handleDragOver, false);
	  value.addEventListener('dragleave', handleDragLeave, false);
	  value.addEventListener('drop', handleDrop, false);
	  value.addEventListener('dragend', handleDragEnd, false);
	});
}

function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
  // this / e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

    // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
  // this/e.target is the source node.
var items = $('#password-list .drag').toArray();

  $.each(items, function (index, value) {
    value.classList.remove('over');
    value.style.opacity = '1';
  });
}