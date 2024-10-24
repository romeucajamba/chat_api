import { createServer } from 'node:http';
import { Server } from "socket.io";
import { app } from "./app";


const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(4000, () => {
    console.log('server running at http://localhost:4000');
});