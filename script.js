// Example food items
const menuItems = [
  {
    name: "海南薏粑 Hainanese Yi Bua",
    price: "$1.60",
    image: "img/hainanKuih.jpg"
  },
  {
    name: "牛油馒头 Butter Buns",
    price: "$1.60",
    image: "img/mantou.jpg"
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
