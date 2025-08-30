// Example food items
const menuItems = [
  {
    name: "Spaghetti Carbonara",
    price: "$12.99",
    image: "https://source.unsplash.com/600x400/?pasta"
  },
  {
    name: "Sushi Platter",
    price: "$18.50",
    image: "https://source.unsplash.com/600x400/?sushi"
  },
  {
    name: "Cheeseburger",
    price: "$9.99",
    image: "https://source.unsplash.com/600x400/?burger"
  },
  {
    name: "Caesar Salad",
    price: "$7.50",
    image: "https://source.unsplash.com/600x400/?salad"
  },
  {
    name: "Pepperoni Pizza",
    price: "$14.20",
    image: "https://source.unsplash.com/600x400/?pizza"
  },
  {
    name: "Ramen Noodles",
    price: "$11.75",
    image: "https://source.unsplash.com/600x400/?ramen"
  }
];

// Render food items dynamically
const menuContainer = document.getElementById("menu");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("menu-item");

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="menu-info">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
    </div>
  `;

  menuContainer.appendChild(card);
});
