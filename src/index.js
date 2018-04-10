document.addEventListener("DOMContentLoaded", function() {

  const searchForm = document.getElementById('pokemon-search-form');
  const pokemonContainer = document.getElementById('pokemon-container');
  // debugger
  let searchResults = [];

  pokemonContainer.addEventListener('click', e => renderApp())

  searchForm.addEventListener('keyup', e => {
    if (e.target.value.length > 0) {
      searchResults = pokemonArray.filter(poke => poke.name.includes(e.target.value));
      renderApp();
    } else {
      searchResults = [];
      renderApp();
    }
  })

  function renderApp() {
    pokemonContainer.innerHTML = searchResults.map(poke => poke.render()).join('');
    searchResults.map(poke => {poke.addFlipListener(), poke.addInfoListener(), poke.styleBox()});
  }

  pokemon["pokemons"].map(poke => new Pokemon(
    poke["height"],
    poke["weight"],
    poke["order"],
    poke["name"],
    poke["abilities"],
    poke["moves"],
    poke["stats"],
    poke["types"],
    poke["sprites"],
  ))
})
