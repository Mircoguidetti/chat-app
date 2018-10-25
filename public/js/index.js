let socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.on('newMessage', function (message) {

    let li = jQuery('<li> </li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
  });

  socket.on('newLocationMessage', function (message) {
    let li = jQuery('<li> </li>');
    let a = jQuery('<a target="_blank"> Current Location </a>');
    li.text(`${message.from}`);
    a.attr('href', message.url);
    li.append(a);

    jQuery('#messages').append(li);
  });
});


socket.on('disconnect', function () {
  console.log('Disconnected from the  server');
});

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();

  let messageTextBox = jQuery('[name=message]');

  socket.emit('createMessage', {
    from: 'User',
    text: messageTextBox.val()

  }, function() {
    messageTextBox.val('');
  });
});

let locationButton = jQuery('#send-location');
locationButton.on('click', function() {
  if(!navigator.geolocation){
    return alert('Geolocation not supported by you browser');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocation', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function() {
    locationButton.removeAttr('disabled').text('Send location');
    return alert('Unable to fetch location');
  });
});
