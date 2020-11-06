// function getWeather(options) {
//   // write the function...
// }

const getWeather = function(options) {

};

const getWeather = (options) => {

};

async function examples() {
  let results = await getWeather({
    city: 'Denver',
  });
  results = await getWeather({
    zipcode: 80202,
  });
  results = await getWeather({
    lat: 101,
    long: 79,
  });
  results = await getWeather({
    county: 'Denver County',
    city: 'Denver',
    state: 'CO',
  });
  results = await getWeather({
    address: '123 Main St',
    city: 'Denver',
    state: 'CO',
    zipcode: 80202,
  });
  results = await getWeather({
    landmark: 'DIA',
  });
}
