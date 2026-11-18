const url = "https://dragonball-api.com/api/characters";

const $contenedor = document.querySelector("#contenedor-personajes");
const $estado = document.querySelector("#estado");
const $busqueda = document.querySelector("#input-buscar");

let personajes = [];

async function cargarPersonaje() {
    $estado.textContent = "Cargando..."
    $contenedor.innerHTML = "";
    try{
        const res = await fetch(url);
        
        if(!res.ok) throw new Error(`Error ${res.status} en la respuesta`);
        
        const datos = await res.json(); 
        personajes = datos.items;
        console.log(personajes);
        
        MostrarPersonajes(personajes);

    } catch(error){
        $estado.textContent = "no se pudieron cargar a los personajes, Proba de nuevo";
        console.log(error);
    }
};

function MostrarPersonajes(lista) {
    $contenedor.innerHTML = "";

    if(lista.length === 0){
        $estado.textContent = "Sin resultados";
        return;
    }

    $estado.innerHTML = `${lista.length} Personaje(s)`;

    for(const Personaje of lista){
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta";

        const imagen = document.createElement("img");
        imagen.src = Personaje.image;
        imagen.alt = `Foto de ${Personaje.name}`;

        const titulo = document.createElement("h2");
        titulo.textContent = Personaje.name;

        const detalle = document.createElement("p");
        detalle.textContent = `${Personaje.ki} · ${Personaje.maxKi} · ${Personaje.race} ${Personaje.originPlanet ? Personaje.originPlanet.name : " · Desconocido"}`;

        tarjeta.append(imagen, titulo, detalle);
        $contenedor.appendChild(tarjeta);
    }
}

if($busqueda){
    $busqueda.addEventListener("input", (e) => {
        const textoBusqueda = e.target.value.toLowerCase().trim();
        
        const filtrados = personajes.filter((p) => 
            p.name.toLowerCase().includes(textoBusqueda)
    );
    MostrarPersonajes(filtrados);
    });
}

cargarPersonaje();