// /server.js
const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");

const port = 8080;
// we will use port 8000 for our app
server.listen(port, () => console.log("connected to port 8080!"));

// only use this for dev purposes
app.use(cors());

io.on("connection", client => {

  console.log('user connected')

  client.on("disconnect", () => {
    console.log("user disconnected");
  });

  client.on('send-message', messages => {
    io.sockets.emit('new-message', messages)
  })
});