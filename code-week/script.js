document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector("input");
  const searchButton = document.querySelector(".hero-search-button");
  const errorMessage = document.getElementById("error-message");

  searchButton.addEventListener("click", async function () {
    const searchText = searchInput.value.toLowerCase();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();

      const filteredContacts = data.filter((contact) =>
        Object.values(contact).join(" ").toLowerCase().includes(searchText)
      );

      if (filteredContacts.length === 0) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
        renderContactsList(filteredContacts);
        window.location.href = "#my-contacts";
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  });
});

function createCard(user) {
  const card = document.createElement("li");
  card.innerHTML = `
      <div>
        ${user.name}<br>
         ${user.username}<br>
         ${user.email}<br>
      </div>
      <button class="move-button">Add</button>
    `;

  const moveButton = card.querySelector(".move-button");
  moveButton.addEventListener("click", () => {
    moveContact(card);
  });

  return card;
}

function moveContact(card) {
  const contactsList = document.querySelector(".contacts-list");
  const myContactsList = document.querySelector(".my-contacts-list");

  if (contactsList.contains(card)) {
    contactsList.removeChild(card);
    myContactsList.appendChild(card);
    card.querySelector(".move-button").innerText = "Remove";
  } else if (myContactsList.contains(card)) {
    myContactsList.removeChild(card);
    contactsList.appendChild(card);
    card.querySelector(".move-button").innerText = "Add";
  }
}

function renderContactsList(data) {
  const contactsList = document.querySelector(".contacts-list");

  contactsList.innerHTML = "";

  data.forEach((user) => {
    const card = createCard(user);
    contactsList.appendChild(card);
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    renderContactsList(data);
  });
