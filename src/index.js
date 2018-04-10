document.addEventListener("DOMContentLoaded", function() {

  const pokemonArray = [];
  const searchForm = document.getElementById('pokemon-search-form')

  searchForm.addEventListener('keyup', e => {
    alert(e.target.value)
  })

  class Pokemon {
    constructor(height, weight, order, name, abilities, moves, stats, types, sprites) {
      this.height = height;
      this.weight = weight;
      this.order = order;
      this.name = name;
      this.abilities = abilities;
      this.moves = moves;
      this.stats = stats;
      this.types = types;
      this.sprites = sprites;
      pokemonArray.push(this);
    }
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

  console.log(pokemonArray);
})
