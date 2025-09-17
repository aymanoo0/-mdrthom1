// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
});

// Navigation functionality
let currentSection = 'home';

function showSection(sectionName) {
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionName + '-section').classList.remove('hidden');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-red-600', 'font-medium');
        link.classList.add('text-gray-700');
    });

    const activeLinks = document.querySelectorAll(`[onclick="showSection('${sectionName}')"]`);
    activeLinks.forEach(link => {
        if (link.classList.contains('nav-link')) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-red-600', 'font-medium');
        }
    });

    currentSection = sectionName;
    document.getElementById('mobile-menu').classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        triggerFadeInAnimations();
    }, 100);
}

// Products data
const products = [
    { id: 1, name: 'موقع متجر الكتروني', number: 1, bgColor: 'bg-red-600', category: 'الكل' },
    { id: 2, name: 'تطبيق توصيل', number: 2, bgColor: 'bg-blue-600', category: 'التطبيقات' },
    { id: 3, name: 'هوية بصرية كاملة', number: 3, bgColor: 'bg-purple-600', category: 'وسائل' },
    { id: 4, name: 'تصميم مقال', number: 5, bgColor: 'bg-orange-600', category: 'وسائل' },
    { id: 5, name: 'موقع شركة', number: 6, bgColor: 'bg-red-700', category: 'الكل' },
    { id: 6, name: 'فيديو الإيحي', number: 4, bgColor: 'bg-green-600', category: 'وسائل' },
    { id: 7, name: 'تطبيق الهاتف', number: 7, bgColor: 'bg-blue-700', category: 'التطبيقات' },
    { id: 8, name: 'نظام إدارة', number: 8, bgColor: 'bg-purple-700', category: 'الخوادم والحديد' },
    { id: 9, name: 'تصميم شعار', number: 9, bgColor: 'bg-green-700', category: 'وسائل' },
    { id: 10, name: 'خدمة استشارية', number: 10, bgColor: 'bg-indigo-600', category: 'المعدات والخدمات' }
];

// Portfolio data
const portfolioItems = [
    { id: 1, title: 'موقع تجاري', category: 'مواقع', bgColor: 'bg-red-500', textColor: 'text-white' },
    { id: 2, title: 'تطبيق توصيل', category: 'التطبيقات', bgColor: 'bg-blue-500', textColor: 'text-white' },
    { id: 3, title: 'هوية بصرية', category: 'الهوية والرسوم', bgColor: 'bg-green-500', textColor: 'text-white' },
    { id: 4, title: 'تصوير منتجات', category: 'التصوير', bgColor: 'bg-purple-500', textColor: 'text-white' },
    { id: 5, title: 'متجر إلكتروني', category: 'تجارات وأخرى', bgColor: 'bg-orange-500', textColor: 'text-white' },
    { id: 6, title: 'تطبيق جوال', category: 'التطبيقات', bgColor: 'bg-indigo-600', textColor: 'text-white' },
    { id: 7, title: 'موقع شركة', category: 'مواقع', bgColor: 'bg-teal-500', textColor: 'text-white' },
    { id: 8, title: 'شعار وهوية', category: 'الهوية والرسوم', bgColor: 'bg-pink-500', textColor: 'text-white' },
    { id: 9, title: 'جلسة تصوير', category: 'التصوير', bgColor: 'bg-yellow-500', textColor: 'text-black' },
    { id: 10, title: 'نظام إدارة', category: 'تجارات وأخرى', bgColor: 'bg-gray-700', textColor: 'text-white' },
    { id: 11, title: 'موقع شخصي', category: 'مواقع', bgColor: 'bg-red-600', textColor: 'text-white' },
    { id: 12, title: 'تطبيق طعام', category: 'التطبيقات', bgColor: 'bg-blue-600', textColor: 'text-white' }
];

let activeProductFilter = 'الكل';
let activePortfolioFilter = 'الكل';

// Filter products
function filterProducts(category) {
    activeProductFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const filteredProducts = category === 'الكل' ? products : products.filter(p => p.category === category);
    renderProducts(filteredProducts);
}

// Filter portfolio
function filterPortfolio(category) {
    activePortfolioFilter = category;
    document.querySelectorAll('.portfolio-filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const filteredItems = category === 'الكل' ? portfolioItems : portfolioItems.filter(i => i.category === category);
    renderPortfolio(filteredItems);
}

// Render products
function renderProducts(productsToRender) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = `${product.bgColor} rounded-2xl p-6 h-48 flex flex-col justify-between text-white relative overflow-hidden cursor-pointer group product-item`;
        productElement.innerHTML = `
            <div class="absolute top-4 left-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">
                ${product.number}
            </div>
            <div class="mt-auto">
                <h3 class="text-lg font-bold text-right leading-tight">${product.name}</h3>
            </div>
            <div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">الدخول</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 pointer-events-none"></div>
        `;
        grid.appendChild(productElement);
    });
}

// Render portfolio
function renderPortfolio(itemsToRender) {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = '';
    itemsToRender.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = `${item.bgColor} ${item.textColor} rounded-2xl p-6 h-48 md:h-56 flex items-end relative overflow-hidden cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-xl`;
        itemElement.innerHTML = `
            <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/20"></div>
            <div class="relative z-10 w-full">
                <h3 class="font-bold text-lg leading-tight">${item.title}</h3>
                <p class="text-sm opacity-80 mt-1">${item.category}</p>
            </div>
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="bg-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">عرض التفاصيل</span>
            </div>
        `;
        grid.appendChild(itemElement);
    });
}

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('شكراً لك! تم استلام رسالتك وسنتواصل معك قريباً.');
    this.reset();
});

// Fade-in animations
function triggerFadeInAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    renderPortfolio(portfolioItems);
    triggerFadeInAnimations();
});

// Smooth scrolling
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
});
