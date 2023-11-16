//esercizio 1

const roboProdGen = (roboData) => {
  const wrapperEL = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");
  const nameEl = document.createElement("h4");

  wrapperEL.className = "robo";
  imgEl.src = roboData.imageUrl;
  imgEl.alt = roboData.roboName;
  textEl.className = "text";
  priceEl.textContent = roboData.price + "£";
  nameEl.textContent = roboData.roboName;

  textEl.append(priceEl, nameEl);
  wrapperEL.append(textEl, imgEl);

  return wrapperEL;
};

const mockData = [
  {
    id: 1,
    roboName: "peppe",
    price: 20,
    imageUrl: "https://robohash.org/peppe",
  },

  {
    id: 2,
    roboName: "roBro",
    price: 6,
    imageUrl: "https://robohash.org/roBro",
  },

  {
    id: 3,
    roboName: "roborto",
    price: 8,
    imageUrl: "https://robohash.org/roborto",
  },

  {
    id: 4,
    roboName: "roboicotto",
    price: 420,
    imageUrl: "https://robohash.org/roboicotto",
  },

  {
    id: 5,
    roboName: "robofero",
    price: 55,
    imageUrl: "https://robohash.org/robofero",
  },

  {
    id: 6,
    roboName: "robetto",
    price: 12,
    imageUrl: "https://robohash.org/robetto",
  },

  {
    id: 7,
    roboName: "robino",
    price: 8,
    imageUrl: "https://robohash.org/robino",
  },

  {
    id: 8,
    roboName: "jamesRobond",
    price: 700,
    imageUrl: "https://robohash.org/jamesRobond",
  },
];

const roboListEl = document.querySelector(".robo-list");

mockData.map((robo) => roboListEl.appendChild(roboProdGen(robo)));

//esercizio 2 INCOMPLETO

//try {
//roboProdGen.map((robo) => mockData.append(robo.roboName));
//} catch (error)

//incompeto
