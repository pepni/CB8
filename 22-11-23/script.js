// esercizio n° 1

// Definisco la funzione asincrona imagesList con una arrow function

const imagesList = async () => {
  // Effettuo una chiamata asincrona all'endpoint con fetch

  const res = await fetch("https://picsum.photos/v2/list");

  // Estraggo i dati JSON dalla risposta

  const data = await res.json();

  // Utilizzo il metodo map per creare l'array contenente i valori della chiave download_url

  const imagesListMap = data.map((image) => image.download_url);

  // Restituisco l'array

  return data;
};

fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())

  .then((data) => console.log(data));

//_______________________________________________________________
// esercizio n° 2 - INCOMPLETO
//_______________________________________________________________

// const object = {
//     id: "0",
//     author: "Alejandro Escamilla",
//     download_url: "https://picsum.photos/id/0/5000/3333",
//   };

// const elGen = ("https://picsum.photos/id/0/5000/3333", author) => {

//   const wrapperEl = document.createElement("div");
//   const imageEl = document.createElement("img");
//   const textEl = document.createElement("p");

//   wrapperEl.className = "box";
//   imageEl.className = "image";
//   imageEl.src = download_url;
//   textEl.textContent = author;

//   document.body.append(elGen("https://picsum.photos/id/0/5000/3333", "author"));

//   return wrapperEl;
// }

// document.body.append(elGen);
