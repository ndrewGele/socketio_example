const httpServer = require('http').createServer()
const io = require('socket.io')(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

io.on('connection', socket => {
  socket.emit('init', { data: 'hello!' })
})

console.log('Server running')

httpServer.listen(3000)
