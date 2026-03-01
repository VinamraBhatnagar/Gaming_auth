// ===== Product Data =====
const gamingProducts = [
    {
        id: 'g1',
        name: 'Valorant Immortal Account',
        category: 'valorant',
        price: 149.99,
        originalPrice: 199.99,
        badge: 'hot',
        icon: 'fa-crosshairs',
        rating: 4.9,
        reviews: 234,
        tags: ['Immortal 3', '50+ Skins'],
        description: 'Premium Valorant account with Immortal 3 rank. Includes 50+ premium skins including Reaver, Prime, and Glitchpop collections. All agents unlocked with 10,000+ VP worth of cosmetics.',
        features: ['Immortal 3 Rank', '50+ Premium Skins', 'All Agents Unlocked', 'Full Email Access']
    },
    {
        id: 'g2',
        name: 'Fortnite OG Renegade Raider',
        category: 'fortnite',
        price: 299.99,
        originalPrice: 399.99,
        badge: 'hot',
        icon: 'fa-shield-halved',
        rating: 5.0,
        reviews: 156,
        tags: ['Season 1 OG', 'Rare Skins'],
        description: 'Extremely rare Fortnite account with Renegade Raider skin from Season 1. Contains multiple OG skins including Aerial Assault Trooper, Black Knight, and more.',
        features: ['Renegade Raider', 'Black Knight', '200+ Skins', 'Full Email Access']
    },
    {
        id: 'g3',
        name: 'CS2 Global Elite Account',
        category: 'csgo',
        price: 89.99,
        originalPrice: 129.99,
        badge: 'new',
        icon: 'fa-gun',
        rating: 4.8,
        reviews: 312,
        tags: ['Global Elite', 'Prime'],
        description: 'CS2 Prime account with Global Elite rank. Clean account with 5-year veteran coin. Includes several rare knife skins and premium gloves.',
        features: ['Global Elite Rank', 'Prime Status', '5-Year Coin', 'Clean VAC History']
    },
    {
        id: 'g4',
        name: 'League of Legends Diamond',
        category: 'lol',
        price: 79.99,
        originalPrice: null,
        badge: null,
        icon: 'fa-chess-queen',
        rating: 4.7,
        reviews: 189,
        tags: ['Diamond 1', '150+ Champs'],
        description: 'League of Legends account with Diamond 1 ranking. All champions unlocked with multiple legendary and ultimate skins. NA server with transferable region.',
        features: ['Diamond 1 Rank', 'All Champions', '200+ Skins', 'Blue Essence: 50K']
    },
    {
        id: 'g5',
        name: 'PUBG Conqueror Account',
        category: 'pubg',
        price: 119.99,
        originalPrice: 159.99,
        badge: null,
        icon: 'fa-parachute-box',
        rating: 4.6,
        reviews: 98,
        tags: ['Conqueror', 'Season Pass'],
        description: 'PUBG Mobile account with Conqueror rank. Multiple mythic outfits and gun skins. All Royale Pass items from Season 1-20 included.',
        features: ['Conqueror Rank', 'Mythic Outfits', 'All RP Items S1-S20', 'UC: 5000']
    },
    {
        id: 'g6',
        name: 'Valorant Radiant Smurf',
        category: 'valorant',
        price: 199.99,
        originalPrice: 249.99,
        badge: 'hot',
        icon: 'fa-crosshairs',
        rating: 4.9,
        reviews: 412,
        tags: ['Radiant', 'Rare Skins'],
        description: 'Fresh Radiant account perfect for competitive play. Includes Champions bundle and multiple knife skins. Low level for unranked games.',
        features: ['Radiant Rank', 'Champions Bundle', 'Low Level', 'Full Access']
    },
    {
        id: 'g7',
        name: 'Fortnite Galaxy Bundle',
        category: 'fortnite',
        price: 199.99,
        originalPrice: null,
        badge: 'new',
        icon: 'fa-star',
        rating: 4.8,
        reviews: 87,
        tags: ['Galaxy Skin', 'Exclusive'],
        description: 'Exclusive Fortnite account with rare Galaxy skin bundle. Samsung exclusive items that are no longer obtainable. Plus many Season 3-8 battle pass items.',
        features: ['Galaxy Skin', 'Galaxy Pickaxe', 'Galaxy Glider', 'Save the World']
    },
    {
        id: 'g8',
        name: 'CS2 Knife Collection',
        category: 'csgo',
        price: 449.99,
        originalPrice: 599.99,
        badge: 'hot',
        icon: 'fa-cut',
        rating: 5.0,
        reviews: 67,
        tags: ['5 Knives', 'Inventory: $2000+'],
        description: 'CS2 account with massive knife collection including Karambit Fade, M9 Bayonet Doppler, Butterfly Knife, and more. Total inventory value over $2000.',
        features: ['5 Premium Knives', '$2000+ Inventory', 'Global Elite', 'Prime Account']
    }
];

const clothesProducts = [
    {
        id: 'c1',
        name: 'Neon Gaming Hoodie',
        category: 'hoodies',
        price: 69.99,
        originalPrice: 89.99,
        badge: 'hot',
        icon: 'fa-shirt',
        rating: 4.9,
        reviews: 342,
        tags: ['M-2XL', 'Unisex'],
        description: 'Premium quality hoodie with neon gaming graphics. Features glow-in-the-dark print, kangaroo pocket, and soft fleece interior. Perfect for gaming sessions.',
        features: ['100% Cotton', 'Glow-in-Dark', 'Kangaroo Pocket', 'Fleece Interior'],
        sizes: ['S', 'M', 'L', 'XL', '2XL']
    },
    {
        id: 'c2',
        name: 'Pixel Art T-Shirt',
        category: 'tshirts',
        price: 34.99,
        originalPrice: null,
        badge: 'new',
        icon: 'fa-tshirt',
        rating: 4.8,
        reviews: 521,
        tags: ['S-3XL', 'Unisex'],
        description: 'Retro-style pixel art t-shirt with iconic gaming references. Made from premium cotton with a comfortable regular fit.',
        features: ['100% Cotton', 'Regular Fit', 'Double-stitched', 'Pre-shrunk'],
        sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL']
    },
    {
        id: 'c3',
        name: 'Gaming Legends Cap',
        category: 'caps',
        price: 29.99,
        originalPrice: 39.99,
        badge: null,
        icon: 'fa-hat-cowboy',
        rating: 4.7,
        reviews: 198,
        tags: ['Adjustable', 'One Size'],
        description: 'Snapback cap with embroidered gaming controller design. Adjustable strap for perfect fit. Curved bill with structured crown.',
        features: ['Embroidered Design', 'Adjustable Strap', 'Curved Bill', 'Structured Crown'],
        sizes: ['One Size']
    },
    {
        id: 'c4',
        name: 'RGB Keyboard Mousepad XXL',
        category: 'accessories',
        price: 49.99,
        originalPrice: 69.99,
        badge: 'hot',
        icon: 'fa-keyboard',
        rating: 4.9,
        reviews: 876,
        tags: ['XXL Size', 'RGB Lighting'],
        description: 'Extra large gaming mousepad with RGB edge lighting. 14 lighting modes, USB powered, smooth micro-textured surface for precise tracking.',
        features: ['900x400mm', '14 RGB Modes', 'USB Powered', 'Non-slip Base'],
        sizes: ['XXL']
    },
    {
        id: 'c5',
        name: 'Esports Team Jacket',
        category: 'hoodies',
        price: 129.99,
        originalPrice: 169.99,
        badge: null,
        icon: 'fa-vest',
        rating: 4.8,
        reviews: 156,
        tags: ['M-2XL', 'Pro Style'],
        description: 'Official esports team style jacket with neon accents. Water-resistant outer shell, zippered pockets, and premium embroidered logos.',
        features: ['Water-Resistant', 'Zippered Pockets', 'Inner Lining', 'Embroidered Logo'],
        sizes: ['M', 'L', 'XL', '2XL']
    },
    {
        id: 'c6',
        name: 'Controller Print Tee',
        category: 'tshirts',
        price: 29.99,
        originalPrice: null,
        badge: null,
        icon: 'fa-gamepad',
        rating: 4.6,
        reviews: 412,
        tags: ['S-2XL', 'Slim Fit'],
        description: 'Stylish t-shirt with minimalist controller graphic. Slim fit design with soft ringspun cotton for ultimate comfort.',
        features: ['Ringspun Cotton', 'Slim Fit', 'Crew Neck', 'Side-seamed'],
        sizes: ['S', 'M', 'L', 'XL', '2XL']
    },
    {
        id: 'c7',
        name: 'Gaming Wristband Set',
        category: 'accessories',
        price: 14.99,
        originalPrice: 19.99,
        badge: 'new',
        icon: 'fa-hand',
        rating: 4.5,
        reviews: 234,
        tags: ['Set of 3', 'Comfort Fit'],
        description: 'Set of 3 gaming wristbands with moisture-wicking fabric. Perfect for long gaming sessions to absorb sweat and keep you comfortable.',
        features: ['Moisture-Wicking', 'Set of 3', 'Elastic Fit', 'Machine Washable'],
        sizes: ['One Size']
    },
    {
        id: 'c8',
        name: 'Streamer Dad Hat',
        category: 'caps',
        price: 24.99,
        originalPrice: null,
        badge: null,
        icon: 'fa-tv',
        rating: 4.7,
        reviews: 167,
        tags: ['Adjustable', 'Low Profile'],
        description: 'Laid-back dad hat with subtle "Live" streaming text. Low profile unstructured crown with brass buckle adjuster.',
        features: ['Low Profile', 'Brass Buckle', 'Cotton Twill', 'Pre-curved Bill'],
        sizes: ['One Size']
    }
];

// ===== Cart State =====
let cart = [];

// ===== Weather Configuration =====
const WEATHER_API_KEY = ''; // Add your OpenWeatherMap API key here for live weather
const DEFAULT_LOCATION = { lat: 40.7128, lon: -74.0060 }; // New York as default

// Weather condition to theme mapping
const weatherThemes = {
    'Clear': { theme: 'sunny', icon: 'fa-sun', text: 'Sunny' },
    'Clouds': { theme: 'cloudy', icon: 'fa-cloud', text: 'Cloudy' },
    'Rain': { theme: 'rainy', icon: 'fa-cloud-rain', text: 'Rainy' },
    'Drizzle': { theme: 'rainy', icon: 'fa-cloud-rain', text: 'Drizzle' },
    'Thunderstorm': { theme: 'thunderstorm', icon: 'fa-bolt', text: 'Thunderstorm' },
    'Snow': { theme: 'snowy', icon: 'fa-snowflake', text: 'Snowy' },
    'Mist': { theme: 'cloudy', icon: 'fa-smog', text: 'Misty' },
    'Fog': { theme: 'cloudy', icon: 'fa-smog', text: 'Foggy' },
    'Haze': { theme: 'cloudy', icon: 'fa-smog', text: 'Hazy' }
};

// Manual theme cycle for demo purposes
const themes = ['sunny', 'cloudy', 'rainy', 'snowy', 'thunderstorm', 'night', 'hot'];
let currentThemeIndex = 0;

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    initUser();
    initWeather();
    renderProducts();
    initCart();
    initEventListeners();
    initScrollEffects();
});

// ===== User Functions =====
function initUser() {
    const user = JSON.parse(localStorage.getItem('gamestylehub-user'));
    
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // Update user display
    const userName = document.getElementById('userName');
    const dropdownUserName = document.getElementById('dropdownUserName');
    const dropdownUserEmail = document.getElementById('dropdownUserEmail');
    
    if (userName) {
        userName.textContent = user.name || 'Guest';
    }
    if (dropdownUserName) {
        dropdownUserName.textContent = user.name || 'Guest';
    }
    if (dropdownUserEmail) {
        dropdownUserEmail.textContent = user.email || 'Not logged in';
    }
    
    // User menu toggle
    const userBtn = document.getElementById('userBtn');
    const userMenu = document.getElementById('userMenu');
    
    if (userBtn && userMenu) {
        userBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            userMenu.classList.toggle('open');
        });
        
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!userMenu.contains(e.target)) {
                userMenu.classList.remove('open');
            }
        });
    }
}

async function logout() {
    // Use Firebase signout if available
    if (window.firebaseAuth) {
        await firebaseAuth.signOut();
    } else {
        localStorage.removeItem('gamestylehub-user');
        localStorage.removeItem('gamestylehub-cart');
        window.location.href = 'login.html';
    }
}

// ===== Weather Functions =====
async function initWeather() {
    // Try to get user's location
    if (navigator.geolocation && WEATHER_API_KEY) {
        navigator.geolocation.getCurrentPosition(
            position => fetchWeather(position.coords.latitude, position.coords.longitude),
            () => fetchWeather(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lon)
        );
    } else {
        // Demo mode - cycle through themes or get weather without API
        setDemoWeather();
    }
}

async function fetchWeather(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
        );
        const data = await response.json();
        applyWeatherTheme(data);
    } catch (error) {
        console.log('Weather API error, using demo mode:', error);
        setDemoWeather();
    }
}

function applyWeatherTheme(weatherData) {
    const condition = weatherData.weather[0].main;
    const temp = Math.round(weatherData.main.temp);
    const themeInfo = weatherThemes[condition] || weatherThemes['Clear'];
    
    // Check for night time
    const now = Date.now() / 1000;
    const isNight = now < weatherData.sys.sunrise || now > weatherData.sys.sunset;
    
    // Check for extreme heat
    const isHot = temp >= 35;
    
    let finalTheme = themeInfo.theme;
    let finalIcon = themeInfo.icon;
    let finalText = themeInfo.text;
    
    if (isNight && condition === 'Clear') {
        finalTheme = 'night';
        finalIcon = 'fa-moon';
        finalText = 'Clear Night';
    } else if (isHot) {
        finalTheme = 'hot';
        finalIcon = 'fa-temperature-high';
        finalText = 'Hot';
    }
    
    // Apply theme to body
    document.body.setAttribute('data-weather', finalTheme);
    
    // Update weather indicator
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherText = document.getElementById('weatherText');
    const temperature = document.getElementById('temperature');
    
    weatherIcon.className = `fas ${finalIcon}`;
    weatherText.textContent = finalText;
    temperature.textContent = `${temp}°C`;
}

function setDemoWeather() {
    // Get hour to determine appropriate demo weather
    const hour = new Date().getHours();
    let demoTheme, demoIcon, demoText;
    
    if (hour >= 6 && hour < 12) {
        // Morning - sunny
        demoTheme = 'sunny';
        demoIcon = 'fa-sun';
        demoText = 'Sunny Morning';
    } else if (hour >= 12 && hour < 17) {
        // Afternoon - could be cloudy
        demoTheme = 'cloudy';
        demoIcon = 'fa-cloud-sun';
        demoText = 'Partly Cloudy';
    } else if (hour >= 17 && hour < 20) {
        // Evening - warm
        demoTheme = 'hot';
        demoIcon = 'fa-temperature-high';
        demoText = 'Warm Evening';
    } else {
        // Night
        demoTheme = 'night';
        demoIcon = 'fa-moon';
        demoText = 'Clear Night';
    }
    
    document.body.setAttribute('data-weather', demoTheme);
    
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherText = document.getElementById('weatherText');
    const temperature = document.getElementById('temperature');
    
    weatherIcon.className = `fas ${demoIcon}`;
    weatherText.textContent = demoText;
    temperature.textContent = '(Demo Mode)';
}

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];
    
    document.body.setAttribute('data-weather', theme);
    
    const themeNames = {
        'sunny': { icon: 'fa-sun', text: 'Sunny' },
        'cloudy': { icon: 'fa-cloud', text: 'Cloudy' },
        'rainy': { icon: 'fa-cloud-rain', text: 'Rainy' },
        'snowy': { icon: 'fa-snowflake', text: 'Snowy' },
        'thunderstorm': { icon: 'fa-bolt', text: 'Thunderstorm' },
        'night': { icon: 'fa-moon', text: 'Night' },
        'hot': { icon: 'fa-temperature-high', text: 'Hot' }
    };
    
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherText = document.getElementById('weatherText');
    
    weatherIcon.className = `fas ${themeNames[theme].icon}`;
    weatherText.textContent = themeNames[theme].text;
}

// ===== Product Rendering =====
function renderProducts() {
    renderGamingProducts(gamingProducts);
    renderClothesProducts(clothesProducts);
}

function renderGamingProducts(products) {
    const container = document.getElementById('gamingProducts');
    container.innerHTML = products.map(product => createProductCard(product, 'gaming')).join('');
}

function renderClothesProducts(products) {
    const container = document.getElementById('clothesProducts');
    container.innerHTML = products.map(product => createProductCard(product, 'clothes')).join('');
}

function createProductCard(product, type) {
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 ? '½' : '');
    const badgeHtml = product.badge ? 
        `<span class="product-badge ${product.badge}">${product.badge.toUpperCase()}</span>` : '';
    const originalPriceHtml = product.originalPrice ? 
        `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : '';
    
    return `
        <div class="product-card fade-in" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <i class="fas ${product.icon}"></i>
                ${badgeHtml}
                <div class="product-wishlist">
                    <i class="far fa-heart"></i>
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-meta">
                    ${product.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span>(${product.reviews} reviews)</span>
                </div>
                <div class="product-price">
                    <div>
                        <span class="price">$${product.price.toFixed(2)}</span>
                        ${originalPriceHtml}
                    </div>
                    <button class="add-to-cart" onclick="addToCart('${product.id}', '${type}')">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===== Cart Functions =====
function initCart() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('gamestylehub-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('gamestylehub-cart', JSON.stringify(cart));
}

function addToCart(productId, type) {
    const products = type === 'gaming' ? gamingProducts : clothesProducts;
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Check if already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            type: type,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
    
    // Animate cart icon
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.classList.add('bounce');
    setTimeout(() => cartIcon.classList.remove('bounce'), 300);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <i class="fas ${item.icon}"></i>
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <span>Qty: ${item.quantity}</span>
                    <span class="price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

// ===== Modal Functions =====
function openProductModal(productId, type) {
    const products = type === 'gaming' ? gamingProducts : clothesProducts;
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const modalBody = document.getElementById('modalBody');
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 ? '½' : '');
    
    let sizeSelector = '';
    if (product.sizes) {
        sizeSelector = `
            <div class="size-selector" style="margin-bottom: 20px;">
                <strong style="display: block; margin-bottom: 10px; color: var(--text-primary);">Select Size:</strong>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${product.sizes.map((size, index) => `
                        <button class="filter-btn ${index === 0 ? 'active' : ''}" style="padding: 8px 16px;">${size}</button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <i class="fas ${product.icon}"></i>
        </div>
        <div class="modal-details">
            <h2>${product.name}</h2>
            <div class="product-meta">
                ${product.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <div class="product-rating">
                <span class="stars" style="color: var(--secondary);">${stars}</span>
                <span>(${product.reviews} reviews)</span>
            </div>
            <p class="modal-description">${product.description}</p>
            <div style="margin-bottom: 20px;">
                <strong style="color: var(--text-primary);">Features:</strong>
                <ul style="margin-top: 10px; padding-left: 20px; color: var(--text-secondary);">
                    ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            ${sizeSelector}
            <div class="modal-price">
                $${product.price.toFixed(2)}
                ${product.originalPrice ? `<span class="original-price" style="font-size: 1rem;">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="addToCart('${product.id}', '${type}'); closeProductModal();">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
                <button class="btn btn-secondary">
                    <i class="far fa-heart"></i> Wishlist
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('productModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('open');
    document.body.style.overflow = '';
}

// ===== Event Listeners =====
function initEventListeners() {
    // Cart toggle
    document.querySelector('.cart-icon').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    
    // Modal close
    document.getElementById('closeModal').addEventListener('click', closeProductModal);
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('productModal')) {
            closeProductModal();
        }
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', cycleTheme);
    
    // Product card clicks
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on add to cart or wishlist
            if (e.target.closest('.add-to-cart') || e.target.closest('.product-wishlist')) {
                return;
            }
            const id = card.dataset.id;
            const type = id.startsWith('g') ? 'gaming' : 'clothes';
            openProductModal(id, type);
        });
    });
    
    // Filter buttons
    document.querySelectorAll('.category-filters').forEach(filterContainer => {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const category = btn.dataset.category;
                const section = filterContainer.closest('.products-section');
                const isGaming = section.id === 'gaming';
                
                filterProducts(category, isGaming);
            });
        });
    });
    
    // Wishlist buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.product-wishlist')) {
            e.stopPropagation();
            const heart = e.target.closest('.product-wishlist').querySelector('i');
            heart.classList.toggle('far');
            heart.classList.toggle('fas');
            if (heart.classList.contains('fas')) {
                heart.style.color = '#ff4444';
                showNotification('Added to wishlist!');
            } else {
                heart.style.color = '';
                showNotification('Removed from wishlist');
            }
        }
    });
    
    // Newsletter form
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Thanks for subscribing!');
        e.target.reset();
    });
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent! We\'ll get back to you soon.');
        e.target.reset();
    });
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Update active nav link
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Mobile menu (basic toggle)
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        showNotification('Mobile menu - expand navigation area');
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeProductModal();
        }
    });
}

function filterProducts(category, isGaming) {
    const products = isGaming ? gamingProducts : clothesProducts;
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    if (isGaming) {
        renderGamingProducts(filtered);
    } else {
        renderClothesProducts(filtered);
    }
    
    // Re-attach click listeners to new cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart') || e.target.closest('.product-wishlist')) {
                return;
            }
            const id = card.dataset.id;
            const type = id.startsWith('g') ? 'gaming' : 'clothes';
            openProductModal(id, type);
        });
    });
}

// ===== Scroll Effects =====
function initScrollEffects() {
    // Navbar shadow on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 30px var(--shadow-color)';
        } else {
            navbar.style.boxShadow = '0 2px 20px var(--shadow-color)';
        }
        
        // Update active nav link based on scroll position
        const sections = ['home', 'gaming', 'clothes', 'about', 'contact'];
        let currentSection = 'home';
        
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom > 150) {
                    currentSection = section;
                }
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.feature-card, .stat, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== Utility Functions =====
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 5px 30px var(--shadow-color);
        animation: slideUp 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from { opacity: 0; transform: translateX(-50%) translateY(20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes slideDown {
            from { opacity: 1; transform: translateX(-50%) translateY(0); }
            to { opacity: 0; transform: translateX(-50%) translateY(20px); }
        }
        .bounce {
            animation: bounceAnim 0.3s ease;
        }
        @keyframes bounceAnim {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for bounce animation
const bounceStyle = document.createElement('style');
bounceStyle.textContent = `
    .bounce {
        animation: bounceAnim 0.3s ease;
    }
    @keyframes bounceAnim {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
`;
document.head.appendChild(bounceStyle);
