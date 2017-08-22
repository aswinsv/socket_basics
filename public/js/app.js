var socket = io();

socket.on('connect',function(){

console.log("The client has connected to socket.io server");

});

socket.on('message',function(serverMessage){

console.log("New Message from server!");

console.log(serverMessage.text);

});

// Handles submitting of new Message

var $form= jQuery('#message-form');

$form.on('submit',function(event){

	event.preventDefault();

	socket.emit('message',{

		text: $form.find('input[name=message]').val()
	})

	$form.trigger("reset");

});