
const send = document.getElementById('send')
const reload = document.getElementById('reload')

function agregarEventos() {
  // evento de "click" sobre boton reload
  // Alumno: Al precionar el boton reload se debe llamar
  // a la función "reset"
  restart()

}

const restart = () => {
  let sections = document.querySelectorAll("section");
  let section = sections[0];

  // Borro el contenido de texto de "resultText"
  let txtRemove = document.getElementById("resultText")
  txtRemove.textContent = ""

  // Quito la clase "success" de la imagen "imgpokemon
  let removeClassSuccess = document.getElementById("imgpokemon");

  removeClassSuccess.classList.remove("block")

  // Creo un número aleatorio de 0 a la cantidad de pokemons
  let numero = Math.floor(Math.random() * cantPoke());

  // Modifico el atributo src
  let imgPokemon = document.getElementById("imgpokemon");

  let imgSrc = imgPokemon.src;
  console.log("Muestro la img "+imgSrc);  

  // Selecciono un elemento random de la lista de pokemons
  let randomPokemon = pokemons[numero]

  // Agreglo la propiedad thumbnail al html
  console.log("Pokemon "+randomPokemon.name);  

  imgPokemon.src = randomPokemon.thumbnail

  // Usando setAttribute()
  // imgPokemon.setAttribute("src", randomPokemon.thumbnail)

  console.log(section);
  console.log(txtRemove);
  console.log("numeroAleatorio " + numero);

};