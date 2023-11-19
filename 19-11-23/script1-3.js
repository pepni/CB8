//esercizio N°1 + N°3

//dichiaro il popup con testo e bottoni

const popupEl = (text, btnYes, btnNo) => {
  //creo gli elementi

  const wrapperEl = document.createElement("div");
  const textEl = document.createElement("p");
  const btnWrapper = document.createElement("div");
  const btnYesEl = document.createElement("button");
  const btnNoEl = document.createElement("button");

  //assegno le classi

  wrapperEl.className = "popup";
  textEl.textContent = text;
  btnWrapper.className = "buttons";
  btnYesEl.className = btnYes;
  btnYesEl.textContent = "sì";
  btnNoEl.className = btnNo;
  btnNoEl.textContent = "no";

  //appendo gli elementi al popup

  document.body.append(popupEl("sei maggiorenne?", "sì", "no"));

  //aggiungo gli elementi al popup

  function popup() {
    const popup = popupEl("sei maggiorenne?", "sì", "no");

    //appendo il popup al body

    document.body.append(popup);
  }

  //imposto il timer per chiamare la funzione dopo 3.5 secondi
  setTimeout(() => {
    popup("sei maggiorenne?", "sì", "no");
  }, 3500);

  return wrapperEl;
};

// ESERCIZIO N° 3 INCOMPLETO

//document.body.append(popupEl("sei maggiorenne?", "sì", "no"));

//const questionInterval = setInterval(function () {
//   const questionPopup = popupEl("hai più di 18 anni?", "sì", "no");
//   document.body.appendChild(questionPopup);
// }, 3500);

// function showPopup() {
//   const questionPopup = popupEl("hai più di 18 anni?", "sì", "no");
//   document.body.appendChild(questionPopup);
// }

// const popupEl = () => {
//   const wrapperEl = document.createElement("div");
//   const textEl = document.createElement("p");

//   wrapperEl.className = "popup";
//   textEl.textContent = "sei maggiorenne?";

//   return wrapperEl;
// };

// setInterval(() => {
//   document.body.append(popupEl("sei maggiorenne?"));
// }, 3500);
