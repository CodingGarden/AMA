const [getDataButton, sendDataButton] = document.querySelectorAll('button');

async function getRootMessage() {
  const response = await fetch('http://localhost:5000/');
  const json = await response.json();
  console.log(json);
}

async function sendMessage() {
  const response = await fetch('http://localhost:5000/todo', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Learn HTTP',
      done: false,
    })
  });
  const json = await response.json();
  console.log(json);
}

getDataButton.addEventListener('click', () => {
  getRootMessage();
});

sendDataButton.addEventListener('click', () => {
  sendMessage();
});
