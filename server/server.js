const httpServer = require('http').createServer()
const io = require('socket.io')(httpServer)

io.on('connection', socket => {
  socket.emit('init', { data: 'hello!' })
})

console.log('Server running')

io.listen(3000)
