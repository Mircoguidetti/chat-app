let socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Mirco',
    text: 'Yeah it worked'
  });

  socket.on('newMessage', function (message) {
    console.log('Got it', message);
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from the  server');
});
