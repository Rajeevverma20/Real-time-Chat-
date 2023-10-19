const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const http = require('http').createServer(app);
const io= require('socket.io')(http)



app.use(express.static(__dirname+ '/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/index.html');
})

//Socket

io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})

http.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

