const clientsElement = document.querySelector('#clients');
const socket_protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
const socket = new WebSocket(socket_protocol + '://' + window.location.host);

function showClientList(clients) {
  clientsElement.textContent = clients.join(', ');
}

socket.addEventListener('open', (event) => {
  console.log('Connected to server!');
  const name = prompt('What is your name?');
  socket.send(JSON.stringify({
    type: 'setName',
    data: {
      name,
    }
  }));
});

socket.addEventListener('message', (event) => {
  try {
    const message = JSON.parse(event.data);
    if (message.type === 'pong') {
      console.log('Message from server ', message);
    } else if (message.type === 'clients') {
      showClientList(message.data);
    }
  } catch (error) {
    console.error(error);
  }
});

