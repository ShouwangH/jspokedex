// used https://codepen.io/alinas_view/pen/OJyKgZW for html and css

// call api and fetch json
const getData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    return data
}


//html elements for data
const createDisplay = async (img, type1, type2, texturl, height, weight) => {
    document.getElementById('pokeimg').src = img
    const ptype1 = getType(type1)
    document.getElementById('type1').src = ptype1
    const ptype2 = getType(type2)
    document.getElementById('type2').src = ptype2
    console.log(texturl)
    const text = await getFText(texturl)
    document.querySelector(".pokeindex-right__screen").innerHTML = text
    document.getElementById('heightfield').innerHTML = `Height: ${height}`
    document.getElementById('weightfield').innerHTML = `Weight: ${weight}`
}

const loadData = async (name)=> {
    const pokemon = await getData(name)
    const sprite = pokemon.sprites.front_default
    const type1 = pokemon.types[0].type.name
    if (pokemon.types.length > 1){
    let type2 = pokemon.types[1].type.name
    }else {let type2 = 'none' };
    const fturl = pokemon.species.url
    const height = pokemon.height
    const weight = pokemon.weight
    createDisplay(sprite, type1, type2, fturl, height, weight)
}


const getFText = async (url) =>{
    const response = await fetch(url)
    const data = await response.json()
    return data.flavor_text_entries[0].flavor_text
}


const getType = (type) => {
    switch(type){
      case 'normal':
        return 'https://cdn2.bulbagarden.net/upload/3/39/NormalIC_Big.png';
      case 'fighting':
        return 'https://cdn2.bulbagarden.net/upload/6/67/FightingIC_Big.png';
      case 'flying':
        return 'https://cdn2.bulbagarden.net/upload/c/cb/FlyingIC_Big.png';
      case 'poison':
        return 'https://cdn2.bulbagarden.net/upload/3/3d/PoisonIC_Big.png';
      case 'ground':
        return 'https://cdn2.bulbagarden.net/upload/8/8f/GroundIC_Big.png';
      case 'rock':
        return 'https://cdn2.bulbagarden.net/upload/c/ce/RockIC_Big.png';
      case 'bug':
        return 'https://cdn2.bulbagarden.net/upload/c/c8/BugIC_Big.png';
      case 'ghost':
        return 'https://cdn2.bulbagarden.net/upload/7/73/GhostIC_Big.png';
      case 'steel':
        return 'https://cdn2.bulbagarden.net/upload/d/d4/SteelIC_Big.png';
      case 'fire':
        return 'https://cdn2.bulbagarden.net/upload/2/26/FireIC_Big.png';
      case 'water':
        return 'https://cdn2.bulbagarden.net/upload/5/56/WaterIC_Big.png';
      case 'grass':
        return 'https://cdn2.bulbagarden.net/upload/7/74/GrassIC_Big.png';
      case 'electric':
        return 'https://cdn2.bulbagarden.net/upload/4/4a/ElectricIC_Big.png';
      case 'psychic':
        return 'https://cdn2.bulbagarden.net/upload/6/60/PsychicIC_Big.png';
      case 'ice':
        return 'https://cdn2.bulbagarden.net/upload/6/6f/IceIC_Big.png';
      case 'dragon':
        return 'https://cdn2.bulbagarden.net/upload/4/48/DragonIC_Big.png';
      case 'dark':
        return 'https://cdn2.bulbagarden.net/upload/5/56/DarkIC_Big.png';
      case 'fairy':
        return 'https://cdn2.bulbagarden.net/upload/d/df/Picross_FairyIC.png';
      case 'none':
        return "";        
      default:
        return 'https://cdn2.bulbagarden.net/upload/3/3c/UnknownIC_Big.png';
    }
}


// search button functionality

const form = document.querySelector('.pokesearchform')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById("SearchPokemon")
    loadData(name.value)
})
