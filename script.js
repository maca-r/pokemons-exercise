async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
  // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
  const pokemonData = await getPokemonData(name);
  console.log(pokemonData);
  

  //Actividades

  // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
  // puedes explorar los elementos HTML utilizando las Dev Tools de tu
  // navegador.

  document.querySelector(`#imagen-pokemon-${order}`).setAttribute("src",pokemonData.imagen);

    
  // 2) Utilizando los stats de cada pokemon, deberás rellenar cada una de las
  // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
  // tendrás que decidir el color que tendrá la barra en cada caso:
  // Si la habilidad es menor a 35, la barra será de color rojo
  // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra será amarilla
  // Si la habilidad es igual o mayor a 70, la barra será de color verde.
  // Deberás utilizar las clases que se encuentran en el archivo styles.css
  document.querySelector(`div #barra-hp-${order}`).setAttribute("data-percent",pokemonData.stats[0].amount)
  
  document.querySelector(`div #barra-ataque-${order}`).setAttribute("data-percent",pokemonData.stats[1].amount)
  
  document.querySelector(`div #barra-defensa-${order}`).setAttribute("data-percent",pokemonData.stats[2].amount)
  
  document.querySelector(`div #barra-velocidad-${order}`).setAttribute("data-percent",pokemonData.stats[3].amount)
  

  
    let hp = document.querySelector(`div #barra-hp-${order}`)

    hp.style.width = hp.getAttribute("data-percent") + "%"


    if (hp.getAttribute("data-percent") < 35){
      hp.classList.add("rojo")
    } else if (hp.getAttribute("data-percent") >= 35 && hp.getAttribute("data-percent") < 70) {
      hp.classList.add("amarillo")
    } else {
      hp.classList.add("verde")
    }

    let ataque = document.querySelector(`div #barra-ataque-${order}`)

    ataque.style.width = ataque.getAttribute("data-percent") + "%"


    if (ataque.getAttribute("data-percent") < 35){
      ataque.classList.add("rojo")
    } else if (ataque.getAttribute("data-percent") >= 35 && ataque.getAttribute("data-percent") < 70) {
      ataque.classList.add("amarillo")
    } else {
      ataque.classList.add("verde")
    }

    let defensa = document.querySelector(`div #barra-defensa-${order}`)

    defensa.style.width = defensa.getAttribute("data-percent") + "%"


    if (defensa.getAttribute("data-percent") < 35){
      defensa.classList.add("rojo")
    } else if (defensa.getAttribute("data-percent") >= 35 && defensa.getAttribute("data-percent") < 70) {
      defensa.classList.add("amarillo")
    } else {
      defensa.classList.add("verde")
    }

    let velocidad = document.querySelector(`div #barra-velocidad-${order}`)

    velocidad.style.width = velocidad.getAttribute("data-percent") + "%"


    if (velocidad.getAttribute("data-percent") < 35){
      velocidad.classList.add("rojo")
    } else if (velocidad.getAttribute("data-percent") >= 35 && velocidad.getAttribute("data-percent") < 70) {
      velocidad.classList.add("amarillo")
    } else {
      velocidad.classList.add("verde")
    }

  
}



//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["pikachu", "bulbasaur", "charmander", "diglett"];

//INICIALIZADOR - NO TOCAR
function renderizarCards() {
  pokemons.forEach((pokemon, index) => {
    const pokemonNumber = index + 1;
    createPokemonCard(pokemon, pokemonNumber);
    fillPokemonData(pokemon, pokemonNumber);
    
  });
}

renderizarCards()

  
  
  

