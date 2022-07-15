const theBox = document.querySelector('#theBox');

const client = new tmi.Client({
	channels: [ 'codinggarden' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  theBox.textContent += '\n' + message;
});