const socket = io("http://localhost:3000")

socket.on('init', handleInit)

function handleInit(message) {
  console.log(message)
}
