//console.log("hola");

// esercitazione n° 1

// dichiarazione dei parametri della funzione

const calculator = (operation1, operation2, num1, num2, num3) => {
  // invocazione delle possibili operazioni con OR

  if (
    operation1 === "+" ||
    "-" ||
    "/" ||
    ("*" && operation2 === "+") ||
    "-" ||
    "/" ||
    "*"
  ) {
    return num1 + operation1 + num2 + operation2 + num3;
  }

  // FUNZIONA :D

  return "fatal error";
};

console.log(2 + 3 / 6);

// esercitazione n° 2

const shoppingCart = [pane, vino, formaggio];

let pane = {
  id: "a",
  name: "toscanino",
  img: "imgA",
  description: "ottimo toscanino di rimacino fresco di giornata",
};

let vino = {
  id: "b",
  name: "amarone",
  img: "imgB",
  description: "Amarone della Valpolicella è un vino della regione Veneto.",
};

let formaggio = {
  id: "c",
  name: "primintiu",
  img: "imgC",
  description: "Il pirmintìu è un formaggio tipico Siciliano.",
};

const shoppingCartDescription = shoppingCartDescription.forEach(
  shoppingCart.description
);
console.log(shoppingCart.description);

// incompleto
