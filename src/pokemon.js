const pokemonArray = [];


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

    this.orientation = this.sprites["front"];

    pokemonArray.push(this);
  }

  styleBox() {
    let box = document.getElementById(`${this.name}-box`)
    // debugger
    switch (this.types[0]) {
      case "fire":
        box.style.backgroundColor = "orange";
        break;
      case "grass":
        box.style.backgroundColor = "aquamarine";
        break;
      case "ice":
        box.style.backgroundColor = "aqua";
        break;
      case "psychic":
        box.style.backgroundColor = "violet";
        break;
      case "water":
        box.style.backgroundColor = "cyan";
        break;
      case "ground":
        box.style.backgroundColor = "brown";
        break;
      case "poison":
        box.style.backgroundColor = "chartreuse";
        break;
      case "electric":
        box.style.backgroundColor = "gold";
        break;
      case "flying":
        box.style.backgroundColor = "#87CEFA";
        break;
      case "grass":
        box.style.backgroundColor = "green";
        break;
      case "fighting":
        box.style.backgroundColor = "palevioletred";
        break;
      case "rock":
        box.style.backgroundColor = "peru";
        break;
      case "bug":
        box.style.backgroundColor = "yellowgreen";
        break;
      case "dragon":
        box.style.backgroundColor = "purple";
        break;
      case "fairy":
        box.style.backgroundColor = "lightpink";
        break;
      default:
        box.style.backgroundColor = "white";
    }


  }

  addFlipListener() {
    let button = document.getElementById(`${this.name}-flip`)
    button.addEventListener('click', e => {
      if (this.orientation === this.sprites["front"]) {
        this.orientation = this.sprites["back"]
      } else {
        this.orientation = this.sprites["front"]
      }
      // renderApp();
    })
  }

  addInfoListener() {
    let img = document.getElementById(`${this.name}-img`)
    img.addEventListener('click', e => {
      let info = document.createElement('div')
      info.setAttribute("id", "info-display")
      info.innerHTML = this.renderInfo();
      document.getElementById("container").append(info)
      info.addEventListener('click', e => {
        info.remove();
      })
    })
  }

  renderInfo() {
    // searchForm.reset();
    let stats = this.stats.map(stat => {
      return `<p><strong>${stat["name"]}: </strong>${stat["value"]}</p>`
    }).join('')

    return `
      <h1>${this.name}</h1>
      <img src="${this.sprites["front"]}" alt="${this.name}"><br>
      <p><strong>Types: </strong>${this.types.join(", ")}</p>
      ${stats}
    `
  }

  render() {
    return `
    <div class="pokemon-frame" id='${this.name}-box'>
      <h1>${this.name}</h1>
      <img id="${this.name}-img" src="${this.orientation}" alt="">
      <p id="${this.name}-flip" class="flip-button">flip card</p>
    </div>
    `
  }
}
