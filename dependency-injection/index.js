function view(model) {
  return `<ul>
    ${model
    .pokemon
    .map((pokemon) => `<li>${pokemon.name}</li>`)
    .join('')}
  </ul>`;
}

async function controller($http, $banana) {
  console.log('I HAS $banana:', $banana);
  const response = await $http('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0');
  const data = await response.json();
  return {
    pokemon: data.results,
  };
}

cjs.registerDependency('$banana', '🍌');

cjs.setComponent({
  view,
  controller,
});
