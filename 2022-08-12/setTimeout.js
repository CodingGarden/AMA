console.log('1: Hello');

const stuffToDoLater = () => {
  console.log('2: Hello');
};

const howMuchLaterInMilliseconds = 0;

// HOW DOES THIS WORK?
// EVENT Loop!
const timeOutId = setTimeout(stuffToDoLater, howMuchLaterInMilliseconds);

clearTimeout(timeOutId);

console.log('3: Hello');
