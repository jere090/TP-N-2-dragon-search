const url = "https://www.dragonball-api.com/api";

const $contenedor = document.querySelector("#contenedor-personajes");
const $cargado = document.querySelector("cargado");
const $error = document.querySelector("error");
const $vacio = document.querySelector("vacio");

async function cargarPersonaje(personaje) {
    const res = await fetch(url);
    if(!res.ok) throw new Error(`Error ${res.status} en la respuesta`);

}