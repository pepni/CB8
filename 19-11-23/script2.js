//esercizio n° 2

//eseguo la chiamata fetch al server esterno

fetch("https://dummyjson.com/products")
  //converto la risposta in formato JSON

  .then((res) => res.json())

  //risolvo la promise filtrando gli elementi dell'array "products" con prezzo inferiore a 50

  .then((data) =>
    //stampo l'array che contiene solo i prodotti con prezzo inferiore a 50

    console.log(data.products.filter((prod) => prod.price < 50))
  );
