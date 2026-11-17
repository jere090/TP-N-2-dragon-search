import "./style.css";

// // URL directa de la API de MyAnimeList para los personajes de One Piece (ID 21)
// const url = "https://api.jikan.moe/v4/anime/21/characters";

// const contenedor = document.querySelector("#contenedor-personajes");

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Datos de Jikan:", data);
//     contenedor.innerHTML = "";

//     // Jikan devuelve un array en la propiedad .data
//     data.data.forEach((item) => {
//       const personaje = item.character; // Objeto con la info del personaje

//       const tarjeta = document.createElement("div");
//       tarjeta.classList.add("card");

//       tarjeta.innerHTML = `
//         <img src="${personaje.images.jpg.image_url}" alt="${personaje.name}" width="100">
//         <h3>${personaje.name}</h3>
//         <p>Rol: ${item.role}</p>
//       `;

//       contenedor.appendChild(tarjeta);
//     });
//   })
//   .catch((error) => {
//     console.error("Error al cargar la API:", error);
//     contenedor.innerHTML = "<p>Hubo un error al cargar los personajes.</p>";
//   });
