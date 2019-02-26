const dataPokemon = window.POKEMON.pokemon;
const start = document.getElementById('start');
const initialPage = document.getElementById('initial-page')
const main = document.getElementById('main');
const imprimirTodo = document.getElementById('center-area');
const search = document.getElementById('seeker');
const selector = document.getElementById('class-selector');
const orderAZ = document.getElementById('order-az');
const orderZA = document.getElementById('order-za');
const getStats = document.getElementById('button-stats')
const statsArea = document.getElementById('stats-section');
const arrayHeigth = [];
const arrayWeight = [];
const returnPage = document.getElementById('return-button')

start.addEventListener('click', () => {
main.style.display="block";
initialPage.style.display="none";
})

const printPokemon = (dataPokemon) => {
  dataPokemon.forEach(element => {
    let infPokemon = `<button onclick="pokemon-only" class="casilla">
   <h6>${element.name.toUpperCase()}</h6>
   <img src="${element.img}" class="img-pokemon">
   <p>Tipo: ${element.type}</p>
   <p>Número: ${element.num}</p>
   <p>Altura: ${element.height}</p>
   <p>Peso: ${element.weight}</p></button>`;
    imprimirTodo.insertAdjacentHTML("beforeend", infPokemon);
    return printPokemon;
  });
};
printPokemon(dataPokemon);

selector.addEventListener('change', () => {
  imprimirTodo.innerHTML = '';
  let typePokemon = event.target.value;
  const porTipo = window.pokemones.filterData(typePokemon, dataPokemon);
  printPokemon(porTipo)
  return typePokemon;
})

search.addEventListener('keyup', () => {
  imprimirTodo.innerHTML = '';
  let nPokemon = search.value;
  let filterName = window.pokemones.filterName(nPokemon, dataPokemon);
  printPokemon(filterName)
  return nPokemon;
})

orderAZ.addEventListener('click', () => {
  imprimirTodo.innerHTML = '';
  let orderAscendent = window.pokemones.sortName(dataPokemon);
  printPokemon(orderAscendent)
})

orderZA.addEventListener('click', () => {
  imprimirTodo.innerHTML = '';
  let orderReverse = window.pokemones.sortNameReverse(dataPokemon);
  printPokemon(orderReverse)
})

getStats.addEventListener('click', () => {
   imprimirTodo.style.display="none";
   statsArea.style.display="block";
  for (let index in dataPokemon) {
    arrayHeigth.push(parseFloat(dataPokemon[index].height));
  }
  const maxHeigth = window.pokemones.computeStatsMaxH(arrayHeigth);
  console.log(maxHeigth)
  const minHeigth = window.pokemones.computeStatsMinH(arrayHeigth);
  console.log(minHeigth)

  for (let index in dataPokemon) {
    arrayWeight.push(parseFloat(dataPokemon[index].weight));
  }
  const maxWeight = window.pokemones.computeStatsMaxW(arrayWeight);
  console.log(maxWeight)
  const minWeight = window.pokemones.computeStatsMinW(arrayWeight);
  console.log(minWeight)
  const printStats= (maxHeigth, minHeigth, maxWeight, minWeight) =>{
   statsArea.innerHTML(`<table>
     <tr>
       <th class="tabla">Medidas</th>
       <th class="tabla">Minímo</th>
       <th class="tabla">Máximo</th>
     </tr>
     <tr>
       <td class="tabla">Altura</td>
       <td class="tabla">${minHeigth} m</td>
       <td class="tabla">${maxHeigth} m</td>
     </tr>
     <tr>
       <td class="tabla">Peso</td>
       <td class="tabla">${minWeight} kg</td>
       <td class="tabla">${maxWeight} kg</td>
     </tr>
   </table>`);
   return (printStats)
  }
})

returnPage.addEventListener('click', () => {
   imprimirTodo.style.display="block";
   statsArea.style.display="none";
})
   
