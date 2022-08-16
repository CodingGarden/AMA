const intervalId = setInterval(() => {
  console.log('HELLO!');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
