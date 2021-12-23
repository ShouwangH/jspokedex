// used https://codepen.io/alinas_view/pen/OJyKgZW for html and css
// used type assets and switch function from https://codepen.io/Pauliigs/pen/gOxBjZy

// call api and fetch json
const getData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    return data
}


//html elements for data
const createDisplay = async (img, poketype1, texturl, height, weight, poketype2) => {
    const text = await getFText(texturl)
    document.getElementById('pokeimg').src = img
    const ptype1 = getType(poketype1)
    document.getElementById('type1').src = ptype1
    const ptype2 = getType(poketype2)
    document.getElementById('type2').src = ptype2
    document.querySelector(".pokeindex-right__screen").innerHTML = text
    document.getElementById('heightfield').innerHTML = `Height: ${height}`
    document.getElementById('weightfield').innerHTML = `Weight: ${weight}`
}

const loadData = async (name)=> {
    const pokemon = await getData(name)
    const sprite = pokemon.sprites.front_default
    const type1 = pokemon.types[0].type.name
    let type2 = "none"
    if (pokemon.types.length ==2) {
    type2 = pokemon.types[1].type.name
    } 
    const fturl = pokemon.species.url
    const height = pokemon.height
    const weight = pokemon.weight
    createDisplay(sprite, type1, fturl, height, weight, type2)
}


const getFText = async (url) =>{
    const response = await fetch(url)
    const data = await response.json()
    return data.flavor_text_entries[0].flavor_text
}


const getType = (type) => {
    switch(type){
      case 'normal':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg';
      case 'fighting':
        return 'https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg';
      case 'flying':
        return 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg';
      case 'poison':
        return 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg';
      case 'ground':
        return 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg';
      case 'rock':
        return 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg';
      case 'bug':
        return 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg';
      case 'ghost':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg';
      case 'steel':
        return 'https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg';
      case 'fire':
        return 'https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg';
      case 'water':
        return 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg';
      case 'grass':
        return 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg';
      case 'electric':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg';
      case 'psychic':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg';
      case 'ice':
        return 'https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg';
      case 'dragon':
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg';
      case 'dark':
        return 'https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg';
      case 'fairy':
        return 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg';
      case 'none':
        return '';    
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
