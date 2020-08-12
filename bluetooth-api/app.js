const initButton = document.querySelector('#initButton');

async function init() {
  const available = await navigator.bluetooth.getAvailability();
  if (available) {
    console.log('This device supports Bluetooth!');
    const result = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      // filters: [{
      //   name: 'Pro Controller',
      // }],
    });
    console.log(result);
    // listDevices();
    // navigator.bluetooth.addEventListener('availabilitychanged', (e) => {
    //   console.log('Availability changed!', e);
    // });
  } else {
    console.log('Doh! Bluetooth is not supported');
  }
}


initButton.addEventListener('click', () => {
  init();
});
