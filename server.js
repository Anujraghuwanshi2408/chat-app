
// import express
const express = require('express');
// const { Socket } = require('socket.io');

// make an express app
const app = express();

// making server using http and express
const server = require('http').Server(app);
 
//it will pick index.html and public folder
app.use(express.static('public'));

// integrating server with the socket io
const io = require('socket.io')(server);

//  server will be having io    
io.on('connection' , (socket) => {
    console.log("connection established" , socket.id);
    //  socketA --> io --> socketB
    //  socketA user is triggering a message event
    
    socket.on('message' , (data) => {   // user is sending a message    
        io.emit('message' , data);      // emitting the message to all other sockets
          
    })

    socket.on('disconnect' , () => {
        console.log(socket.id , '--> left the chat');
    })
}) 


    // socket is giving the data to socket 
    // io is emitting the data 
    // all other sockets will catch the data




    

const PORT = 9000;
 
    
server.listen(PORT , () => {
    console.log(`server is running on PORT ${PORT}`)
})

 
