import io from "socket.io-client"

const socket = io("https://localhost:3000");

socket.on('init', handleInit)

function handleInit(message) {
  console.log(message)
}
