// Add your code here!

let link = "https://pokeapi.co/api/v2/pokemon/";
let input = document.querySelector("#pokemon_input");
let inputText;


let button = document.querySelector("button");
button.addEventListener("click", onClick);


function onClick(event) {
    event.preventDefault();

    inputText = input.value;

    let url = link + inputText;


    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();


        })
        .then(function(myJson) {
            console.log(myJson);
            let pokemon = "Hi, it's me " + myJson.name;
            let h = document.querySelector("#pokemon_name");
            h.innerText = pokemon;
            document.body.appendChild(h);






            let pokemonImg = myJson.sprites.front_default;
            let div = document.querySelector('#pokemon_image');
            let img = document.createElement("img");
            img.src = pokemonImg;
            div.appendChild(img);

        })

    input.value = "";
}