window.pokemones = {

 filterData: (typePokemon, dataPokemon)=> {
  let filtroPorTipo = dataPokemon.filter(element => element.type.includes(typePokemon));
  return filtroPorTipo; 
  },

 filterName: (nPokemon, dataPokemon)=> {
 let pokemonEncontrado = dataPokemon.filter(dataPokemon => (dataPokemon.name.toUpperCase().match(nPokemon.toUpperCase()))); 
  return (pokemonEncontrado)
  },

  sortName: (dataPokemon)=> {
    let orderAscendent = dataPokemon.sort((prev,next)=>{
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name){
      return -1;
    }
    return 0;
  });
  return orderAscendent;
  },

  sortNameReverse: (orderAscendent)=> {
    let orderReverse= orderAscendent.reverse()
  return orderReverse;
  },

  computeStatsMaxH: (arrayHeigth)=>{
    return Math.max.apply(null, arrayHeigth);
  },

  computeStatsMinH: (arrayHeigth)=>{
    return Math.min.apply(null, arrayHeigth);
  },

  computeStatsMaxW: (arrayWeight)=>{
    return Math.max.apply(null, arrayWeight);
  },
  
  computeStatsMinW: (arrayWeight)=>{
    return Math.min.apply(null, arrayWeight);
  },
}
