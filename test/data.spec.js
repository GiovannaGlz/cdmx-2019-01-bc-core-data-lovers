require('../src/data.js');

const pokemon = [{
"id": 1,
"num": "001",
"name": "Bulbasaur",
"img": "http://www.serebii.net/pokemongo/pokemon/001.png",
"type": [
  "Grass",
  "Poison"
],
"height": "0.71 m",
"weight": "6.9 kg",
"candy": "Bulbasaur Candy",
"candy_count": 25,
"egg": "2 km",
"spawn_chance": 0.69,
"avg_spawns": 69,
"spawn_time": "20:00",
"multipliers": [1.58],
"weaknesses": [
  "Fire",
  "Ice",
  "Flying",
  "Psychic"
],
"next_evolution": [{
  "num": "002",
  "name": "Ivysaur"
}, {
  "num": "003",
  "name": "Venusaur"
}]
}];

describe('Pokemon, debe ser un objeto', () => {
  it('is an object', () => {
    expect(typeof window.pokemones).toBe('object')
  });
});

describe('filterData es una función para filtrar datos', () => {
  it('is a function', () => {
    expect(typeof window.pokemones.filterData).toBe('function');
  });
  
  it('`filterData`, filtra por tipo', () => {      
    expect(window.pokemones.filterData('Grass', pokemon)[0])
    .toEqual(pokemon[0])
  });
});

describe('filterData es una función para filtrar por propiedad .name', () => {
  it('is a function', () => {
    expect(typeof window.pokemones.filterName).toBe('function');
  });
  
  it('`filterName`, filtra por nombre', () => {      
    expect(window.pokemones.filterName('Bulbasaur', pokemon)[0])
    .toEqual(pokemon[0])
  });
});

describe('sortName es una funcion para ordenar por propiedad nombre de forma ascendente',()=>{
  it('is a function', ()=>{
    expect(typeof window.pokemones.sortName).toBe('function');
  });

  it('Ordena los nombres de la A a la Z', () =>{
    expect(window.pokemons.sortName(dataPokemon))
    .toEqual()
  });
});

describe('sortNameReverse es una funcion para ordenar por propiedad nombre de forma descendente',()=>{
  it('is a function', ()=>{
    expect(typeof window.pokemones.sortNameReverse).toBe('function');
  });

  it('Ordena los nombres de la Z a la A', () =>{
    expect(window.pokemons.sortNameReverse(dataPokemon))
    .toEqual()
  });
});