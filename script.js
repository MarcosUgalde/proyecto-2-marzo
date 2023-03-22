window.onload = function () {
  console.log("Todo listo");
  preparePokeballButton();
  // catchPokemon();
  prepareBayasButton();
  prepareComenzarButton();
};

class Pokemon {
  constructor(name = "", type = "", number = 0, location = []) {
    this.name = name;
    this.type = type;
    this.number = number;
    this.location = location;
    this.image = new Image();
    this.image2 = new Image();
    this.background = new Image();
  }
}

const charmander = new Pokemon(
  "Charmander",
  "fuego",
  1,
  [40.4200122, -3.7059001]
);
charmander.image.src = "images/charmander-img.png";
charmander.image2.src = "sprites/charmander-sprite.png";
charmander.background.src = "images/callao.jpg";
const squirtle = new Pokemon("Squirtle", "agua", 2, [40.5890408, -4.1477268]); //monasterio del escorial
squirtle.image.src = "images/squirtle.png";
squirtle.image2.src = "sprites/squirtle-sprite.png";
squirtle.background.src = "images/escorial.jpg";
const bulbasaur = new Pokemon(
  "Bulbasaur",
  "planta",
  3,
  [42.3402863, -3.7042443] //catedral de burgos
);
bulbasaur.image.src = "images/bulbasaur.png";
bulbasaur.image2.src = "sprites/bulbasaur-sprite.png";
bulbasaur.background.src = "images/catedral-burgos.jpg";
const pikachu = new Pokemon(
  "Pikachu",
  "eléctrico",
  4,
  [42.8805962, -8.5446412] //catedral de santiago
);
pikachu.image.src = "images/pikachu.png";
pikachu.image2.src = "sprites/pikachu-sprite.png";
pikachu.background.src = "images/catedral-santiago.jpg";
const pidgeotto = new Pokemon(
  "Pidgeotto",
  "normal/volador",
  5,
  [43.26842845, -2.93406131846438] // guggenheim
);
pidgeotto.image.src = "images/pidgeotto.png";
pidgeotto.image2.src = "sprites/pidgeotto-sprite.gif";
pidgeotto.background.src = "images/guggenheim.jpg";
const onix = new Pokemon("Onix", "roca", 6, [37.17605995, -3.58811027732793]); //la alhambra
onix.image.src = "images/onix.png";
onix.image2.src = "sprites/onix-sprite.gif";
onix.background.src = "images/alhambra.jpg";
const ditto = new Pokemon("Ditto", "normal", 7, [37.75408, -5.131222]); //mezquita córdoba
ditto.image.src = "images/ditto.png";
ditto.image2.src = "sprites/ditto-sprite.png";
ditto.background.src = "images/mezquita-de-cordoba.jpg";
const aerodactyl = new Pokemon(
  "Aerodactyl",
  "roca/volador",
  8,
  [37.377261, -5.986598] // Plaza de España de Sevilla
);
aerodactyl.image.src = "images/aerodactyl.png";
aerodactyl.image2.src = "sprites/aerodactyl-sprite.png";
aerodactyl.background.src = "images/sevilla.jpg";
const dragonite = new Pokemon(
  "Dragonite",
  "dragón",
  9,
  [28.2734568, -16.642925] // El Teide
);
dragonite.image.src = "images/dragonite.png";
dragonite.image2.src = "sprites/dragonite-sprite.png";
dragonite.background.src = "images/teide.jpg";
const mew = new Pokemon("Mew", "psíquico", 10, [42.216295, -8.905363]); // isla do faro en las islas cíes
mew.image.src = "images/mew.png";
mew.image2.src = "sprites/mew-sprite.png";
mew.background.src = "images/cies.jpg";

let bayas = 5;
let gotcha = 0;

const mision = [
  "En la Plaza de Callao ha aparecido un sujeto que está alterando a la población. ¡Captúralo!",
  "Dicen que el Monasterio del Escorial está revolucionado últimamente. ¡Acércate a ver qué pasa!",
  "Un tipo muy extraño está perturbando los alrededores de la catedral de Burgos... ¡Pon un poco de orden!",
  "En la Catedral de Santiago de Compostela han tenido una sobrecarga eléctrica. ¡Necesitan que les ayudes!",
  "Una nueva especie de ave está atacando a los visitantes del Guggenheim. ¡Devuelve la normalidad al museo!",
  "Una masa rocosa se acerca a la Alhambra. ¡No dejes que la destruya!",
  "Captura al tipo raro de los alrededores de la mezquita de Córdoba. ¡Ten cuidado, puede que haya cambiado su apariencia!",
  "Se ha visto una especie muy antigua en Sevilla. ¡Investígalo!",
  "Un animal mitológico ha aparecido en el volcán de una isla remota... ¡Sé el primero en descubrirlo!",
  "Un sujeto único ha aparecido en una isla misteriosa al noroeste del país. ¡Atrápalo y serás un maestro Pokemon!",
];

let step = document.querySelector(".step");
let index = 0;

const win = document.querySelector(".win");

let battle = document.querySelector(".battle");
let game = document.querySelector(".juego");
let pokeImage = document.querySelector(".poke-wild");

let target = charmander;
battle.style.backgroundImage = "url(images/callao.jpg)";

pokeImage.src = target.image.src;

let coordenadas = target.location;

const targetChanger = () => {
  if (target === charmander) target = squirtle;
  else if (target === squirtle) target = bulbasaur;
  else if (target === bulbasaur) target = pikachu;
  else if (target === pikachu) target = pidgeotto;
  else if (target === pidgeotto) target = onix;
  else if (target === onix) target = ditto;
  else if (target === ditto) target = aerodactyl;
  else if (target === aerodactyl) target = dragonite;
  else if (target === dragonite) target = mew;

  // pokeImage.src = target.image.src;
  // coordenadas = target.location;
};

let ubicacion = L.marker([40.4167278, -3.7033387])
  .addTo(map)
  .bindPopup("Jugador")
  .openPopup();
let sprite = L.icon({
  iconUrl: target.image2.src,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});
let circle = L.circle(target.location, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.3,
  radius: 500,
}).addTo(map);
let pokeIcon = L.marker(target.location, { icon: sprite }).addTo(map);

pokeIcon.on("click", () => {
  battle.classList.replace("hidden", "visible");
  game.classList.replace("visible", "hidden");
  battle.scrollIntoView();
});

let random = () => Math.floor(Math.random() * 10) + 1;

function catchPokemon() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let number = random();
      console.log(number);
      if (number >= target.number) resolve(targetChanger());
      reject((pokeImage.src = target.image));
    }, 3000);
  });
}

function prepareComenzarButton() {
  const comenzar = document.querySelector("#comenzar");
  comenzar.addEventListener("click", () => {
    game.scrollIntoView();
  });
}

function preparePokeballButton() {
  const pokeball = document.querySelector("#pokeball");
  pokeball.addEventListener("click", () => {
    console.log("pulsase el botón pokeball ");
    pokeImage.src = "images/pokeball.png";
    catchPokemon()
      .then((result) => {
        gotcha = gotcha + 1;
        battle.classList.replace("visible", "hidden");
        game.classList.replace("hidden", "visible");
        index = index + 1;
        step.innerHTML = mision[index];
        pokeImage.src = target.image.src;
        coordenadas = target.location;
        sprite.iconUrl = target.image2.src;
        console.log(sprite.iconUrl);
        battle.style.backgroundImage = `url(${target.background.src})`;
        console.log(battle.style.backgroundImage);
        game.scrollIntoView();
        if (gotcha === 10) {
          win.classList.replace("hidden", "visible");
          win.scrollIntoView();
        }
        sprite = L.icon({
          iconUrl: target.image2.src,
          iconSize: [40, 40],
          iconAnchor: [20, 20],
        });
        circle = L.circle(target.location, {
          color: "red",
          fillColor: "#f03",
          fillOpacity: 0.3,
          radius: 500,
        }).addTo(map);
        pokeIcon = L.marker(target.location, { icon: sprite }).addTo(map);
        pokeIcon.on("click", () => {
          battle.classList.replace("hidden", "visible");
          game.classList.replace("visible", "hidden");
          battle.scrollIntoView();
        });
      })
      .catch((result) => (pokeImage.src = target.image.src));
  });
}

function prepareBayasButton() {
  const bayasButton = document.querySelector("#bayas");
  bayasButton.addEventListener("click", () => {
    if (bayas > 1) {
      console.log("Has lanzado una baya!");
      bayas = bayas - 1;
      bayasButton.innerHTML = `Bayas (${bayas})`;
      target.number = Math.floor(target.number / 2);
      console.log(target.number);
    } else {
      console.log("¡No te quedan bayas!");
    }
  });
}
