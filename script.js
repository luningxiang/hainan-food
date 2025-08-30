// Food items
const menu = [
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

// Generate menu items
const menuContainer = document.getElementById('menu');

menu.forEach(item => {
  const div = document.createElement('div');
  div.className = 'food-item';
  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.price}</p>
  `;
  menuContainer.appendChild(div);
});

// Modal logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.food-item img').forEach(img => {
  img.onclick = () => {
    modal.classList.add('show');
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  };
});

// Close modal when clicking the "×"
closeBtn.onclick = () => {
  modal.classList.remove('show');
};

// Close modal when clicking outside the image
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
};

// Close modal when pressing "Esc" key
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.classList.remove('show');
  }
});

