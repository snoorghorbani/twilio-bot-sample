$(function() {
  $('#sendNotificationButton').on('click', function() {
    $.post('/send-notification', {
      identity: $('#identityInput').val(),
      body: `{
        text: 'Favorite color?',
        quickReplies: [ 'Red', 'Blue', 'Green' ]
      }`
    }, function(response) {
      $('#identityInput').val('');
      $('#message').html(response.message);
      console.log(response);
    });
  });
});
