//esercizio 1 take 2

const titleEl = document.querySelector(".title");

const heroGenerator = () => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("imgUrl");
  const titleEl = document.createElement("h1");
  const textEl = document.createElement("h2");
  const btnEl = document.createElement("btn");

  wrapperEl.setAttribute("class", "div");
  imgEl.setAttribute("img", "hero image");
  titleEl.textContent("h1", "we can be heroes");
  textEl.textContent("h2", "just for");
  btnEl.textContent("hero button");

  wrapperEl.append(imgEl, titleEl, textEl, btnEl);

  return wrapperEl;
};

document.body.append(
  "https://picsum.photos/1440/673/?blur",
  "we can be heroes",
  "just for",
  "one day"
);

//non riesco a collegare css e js
