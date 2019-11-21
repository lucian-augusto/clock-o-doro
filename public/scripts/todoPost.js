// jshint esversion:6

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
      $.getScript('scripts/todoPost.js', function() {});
    }
  });
});
