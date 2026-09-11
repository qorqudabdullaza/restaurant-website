/* Menu data */
const menuData = {
  pasta: [
    { title: 'Spaghetti Carbonara', price: '$18', text: 'Classic Roman pasta with eggs, pecorino and pancetta.', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600' },
    { title: 'Fettuccine Alfredo', price: '$16', text: 'Creamy parmesan sauce with fresh fettuccine.', img: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600' },
    { title: 'Penne Arrabbiata', price: '$15', text: 'Spicy tomato sauce with garlic and red chili.', img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600' },
    { title: 'Lasagna Bolognese', price: '$19', text: 'Layered pasta with beef ragu and béchamel.', img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600' },
  ],
  pizza: [
    { title: 'Margherita', price: '$14', text: 'Tomato, mozzarella, fresh basil.', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600' },
    { title: 'Pepperoni', price: '$16', text: 'Pepperoni, mozzarella, tomato sauce.', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600' },
    { title: 'Quattro Formaggi', price: '$18', text: 'Four cheese blend with honey drizzle.', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600' },
    { title: 'Prosciutto e Rucola', price: '$20', text: 'Prosciutto, arugula, parmesan shavings.', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600' },
  ],
  dessert: [
    { title: 'Tiramisu', price: '$9', text: 'Coffee-soaked ladyfingers with mascarpone.', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600' },
    { title: 'Panna Cotta', price: '$8', text: 'Vanilla cream with berry coulis.', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600' },
    { title: 'Cannoli', price: '$7', text: 'Crispy shells filled with ricotta.', img: 'https://images.unsplash.com/photo-1607920592519-bab2a80efd55?w=600' },
    { title: 'Gelato Trio', price: '$8', text: 'Three scoops of artisanal gelato.', img: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600' },
  ]
};

const menuGrid = document.getElementById('menuGrid');

function renderMenu(category) {
  menuGrid.innerHTML = menuData[category].map(item => `
    <div class="menu-card">
      <img src="${item.img}" alt="${item.title}">
      <div class="menu-card-body">
        <div class="menu-card-head">
          <h3 class="menu-card-title">${item.title}</h3>
          <span class="menu-card-price">${item.price}</span>
        </div>
        <p class="menu-card-text">${item.text}</p>
      </div>
    </div>
  `).join('');
}

renderMenu('pasta');

/* Tabs */
document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.menu-tab.active').classList.remove('active');
    tab.classList.add('active');
    renderMenu(tab.dataset.category);
  });
});

/* Header scroll */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

/* Mobile menu */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const icon = navToggle.querySelector('i');
  icon.className = navMenu.classList.contains('open') 
    ? 'fa-solid fa-xmark' 
    : 'fa-solid fa-bars';
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.querySelector('i').className = 'fa-solid fa-bars';
  });
});

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

console.log('%c🍕 Bella Vista Restaurant', 'font-size:20px;color:#c8102e;font-weight:bold;');