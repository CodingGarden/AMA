async function sendEmail() {
  console.log('Sending email...');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error('OH NO!!! EMAIL GOBLINSS');
  console.log('Sent email!');
}

async function doAllTheThings() {
  // await sendEmail().then(() => {
  //   console.log('We did the things!');
  // }).catch((error) => {
  //   console.log('Oh no! it broke.');
  // });
  try {
    await sendEmail();
    console.log('We did the things!');
  } catch (error) {
    console.log('Oh no! it broke.');
  }
}

doAllTheThings();
