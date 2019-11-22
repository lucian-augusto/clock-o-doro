// jshint esversion:6

// ##### Client Todo List - For Users that are not logged in #####

// This section of the code works solely on the client side updating the
// Todo List only on the Browser.

// Capturing the contents of the 'input' field and adding it to the list
$('#itemFormClient').on('submit', function(event) {
  event.preventDefault(); // Prevents the default behavior of a post request
  const item = $('#newItem').val();
  $('#newItem').val('');
  const newItem = document.createElement('div'); // Creates a new 'div' element for the item
  newItem.setAttribute('class', 'item'); // Gives the new 'div' an 'item' 'class'
  newItem.innerHTML = '<input type="checkbox"><p>' + item + '</p>';
  $('#itemFormClient').before(newItem); // Efectively adds the item to the list
});

// ##### Server Todo List - For Users that are logged in #####

// This section of the code works only when the user is logged in and uses an
// ajax instance to send the items entered in the Todo List to the server.

$('#itemForm').on('submit', function(event) {
  event.preventDefault(); // Stop the form from causing a page refresh.
  const item = $('#newItem').val();

  $.ajax({
    url: '/',
    method: 'POST',
    cache: false,
    data: {
      item: item
    },
    success: function(response) {
      $('#itemBox').load('/ #itemBox');
      $.getScript('scripts/todo.js', function() {});
    }
  });
});
