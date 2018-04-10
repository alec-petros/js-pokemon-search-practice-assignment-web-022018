// const searchForm = document.getElementById('pokemon-search-form');
// const pokemonContainer = document.getElementById('pokemon-container');

class PokemonSearch {
  constructor() {
    this.searchResults = [];
  }

  renderApp() {
    pokemonContainer.innerHTML = searchResults.map(poke => poke.render()).join('');
    searchResults.map(poke => {poke.addFlipListener(), poke.addInfoListener(), poke.styleBox()});
  }
}
