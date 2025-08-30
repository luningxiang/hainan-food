// Food items
const menu = [
  {
    name: "海南薏粑 Hainanese Yi Bua",
    price: "$1.60",
    image: "img/hainanKuih.jpg",
    category: "kuih"
  },
  {
    name: "牛油馒头 Butter Buns",
    price: "$1.60",
    image: "img/mantou.jpg",
    category: "bao"
  },
  {
    name: "Cheeseburger",
    price: "$9.99",
    image: "https://source.unsplash.com/600x400/?burger",
    category: "bao"
  },
  {
    name: "Caesar Salad",
    price: "$7.50",
    image: "https://source.unsplash.com/600x400/?salad",
    category: "bao"
  },
  {
    name: "Pepperoni Pizza",
    price: "$14.20",
    image: "https://source.unsplash.com/600x400/?pizza",
    category: "dessert"
  },
  {
    name: "Ramen Noodles",
    price: "$11.75",
    image: "https://source.unsplash.com/600x400/?ramen",
    category: "dessert"
  }
];
// Food menu data with category
const menu = [
  { name: "Kuih Lapis", price: "$3.50", image: "img/kuih1.jpg", category: "kuih" },
  { name: "Ang Ku Kuih", price: "$4.00", image: "img/kuih2.jpg", category: "kuih" },
  { name: "Char Siu Bao", price: "$5.50", image: "img/bao1.jpg", category: "bao" },
  { name: "Lotus Seed Bao", price: "$5.00", image: "img/bao2.jpg", category: "bao" },
  { name: "Mango Pudding", price: "$6.50", image: "img/dessert1.jpg", category: "dessert" },
  { name: "Egg Tart", price: "$4.50", image: "img/dessert2.jpg", category: "dessert" }
];

const menuContainer = document.getElementById('menu');
const categoryButtons = document.querySelectorAll('#category-menu button');

// Function to render menu items by category
function renderMenu(category) {
  menuContainer.innerHTML = '';
  let filteredMenu = menu;
  if (category && category !== 'all') {
    filteredMenu = menu.filter(item => item.category === category);
  }
  filteredMenu.forEach(item => {
    const div = document.createElement('div');
    div.className = 'food-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="food-details">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
    `;
    // Click anywhere on the card
    div.addEventListener('click', () => openModal(item.image, item.name));
    menuContainer.appendChild(div);
  });
}

// Initial render
renderMenu('all');

// Category filter
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.category);
  });
});

// Modal logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal(imageSrc, caption) {
  modal.classList.add('show');
  modalImg.src = imageSrc;
  captionText.innerHTML = caption;
}

closeBtn.onclick = () => modal.classList.remove('show');
modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('show'); };
document.addEventListener('keydown', (e) => { if (e.key === "Escape") modal.classList.remove('show'); });

