$(function(){
    const socket = io.connect('http://localhost:4001/');
    const message = $('#message');
    const userName = $('#name');
    const sendMessage = $('#send');
    const chatroom = $('#chatroom');
    const messages = $('#messages');
    let typer = ""

    message.bind("keypress", ()=> {
        socket.emit("typing");
    });

    sendMessage.click(function(){
        console.log(userName.val(), message.val());
        socket.emit('newMessage', {userName: userName.val(), message: message.val()});
    })
    socket.on("newMessage", (data)=> {
        chatroom.append('<p>'+ data.userName+ ' : '+ data.message+ '</p>');
    })

    socket.on("typing", (data) => {
        if(data.userName !== typer){
          messages.append('<p><i>'+ `${data.userName} is typing ...` + '</i></p>');
          typer = data.userName
        }
    })
})