const io =  require('socket.io')(4000, {
    cors: {
        origin: ['http://localhost:3000'],
    },
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});