var socket = io();

socket.on('connect',function(){

console.log("The client has connected to socket.io server");

});

socket.on('message',function(serverMessage){

console.log("New Message from server!");

console.log(serverMessage.text);

});