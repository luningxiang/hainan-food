// Food items
const menu = [
  {
    name: "海南薏粑",
    name2: "Hainanese Yi Bua",
    price: "$1.60",
    image: "img/hainanKuih.jpg",
    category: "kuih"
  },
  {
    name: "牛油馒头",
    name2: "Butter Buns",
    price: "$1.60",
    image: "img/mantou.jpg",
    category: "bao"
  },
  {
    name: "Cheeseburger",
    name2: "",
    price: "$9.99",
    image: "https://source.unsplash.com/600x400/?burger",
    category: "bao"
  },
  {
    name: "Caesar Salad",
    name2: "",
    price: "$7.50",
    image: "https://source.unsplash.com/600x400/?salad",
    category: "bao"
  },
  {
    name: "Pepperoni Pizza",
    name2: "",
    price: "$14.20",
    image: "https://source.unsplash.com/600x400/?pizza",
    category: "dessert"
  },
  {
    name: "Ramen Noodles",
    name2: "",
    price: "$11.75",
    image: "https://source.unsplash.com/600x400/?ramen",
    category: "dessert"
  }
];
// Food menu data
const menu = [
  { name_zh: "千层糕", name_en: "Kuih Lapis", price: "$3.50", image: "img/kuih1.jpg", category: "kuih" },
  { name_zh: "红豆糕", name_en: "Red Bean Cake", price: "$4.00", image: "img/kuih2.jpg", category: "kuih" },
  { name_zh: "叉烧包", name_en: "Char Siu Bao", price: "$5.50", image: "img/bao1.jpg", category: "bao" },
  { name_zh: "莲蓉包", name_en: "Lotus Seed Bao", price: "$5.00", image: "img/bao2.jpg", category: "bao" },
  { name_zh: "芒果布丁", name_en: "Mango Pudding", price: "$6.50", image: "img/dessert1.jpg", category: "dessert" },
  { name_zh: "蛋挞", name_en: "Egg Tart", price: "$4.50", image: "img/dessert2.jpg", category: "dessert" }
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
