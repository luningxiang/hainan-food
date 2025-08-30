// Food items
const menu = [
  {
    name_zh: "海南薏粑",
    name_en: "Hainanese Yi Bua",
    price: "$1.60",
    image: "img/hainanKuih.jpg",
    category: "kuih"
  },
  {
    name_zh: "牛油馒头",
    name_en: "Butter Buns",
    price: "$1.60",
    image: "img/mantou.jpg",
    category: "bao"
  },
  {
    name_zh: "Cheeseburger",
    name_en: "",
    price: "$9.99",
    image: "https://source.unsplash.com/600x400/?burger",
    category: "bao"
  },
  {
    name_zh: "Caesar Salad",
    name_en: "",
    price: "$7.50",
    image: "https://source.unsplash.com/600x400/?salad",
    category: "bao"
  },
  {
    name_zh: "Pepperoni Pizza",
    name_en: "",
    price: "$14.20",
    image: "https://source.unsplash.com/600x400/?pizza",
    category: "dessert"
  },
  {
    name_zh: "Ramen Noodles",
    name_en: "",
    price: "$11.75",
    image: "https://source.unsplash.com/600x400/?ramen",
    category: "dessert"
  }
];

const menuContainer = document.getElementById('menu');
const categoryButtons = document.querySelectorAll('#category-menu button');

// Render menu items
function renderMenu(category) {
  menuContainer.innerHTML = '';
  let filteredMenu = menu;
  if (category && category !== 'all') filteredMenu = menu.filter(item => item.category === category);

  filteredMenu.forEach(item => {
    const div = document.createElement('div');
    div.className = 'food-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name_en}">
      <div class="food-details">
        <h3>
          <span lang="zh">${item.name_zh}</span> <br/>
          <span lang="en">${item.name_en}</span>
        </h3>
        <p>${item.price}</p>
      </div>
    `;
    div.addEventListener('click', () => openModal(item.image, `${item.name_zh} ${item.name_en}`));
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
