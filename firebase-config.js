// Firebase Configuration
// Replace these values with your Firebase project credentials
// Get them from: Firebase Console > Project Settings > General > Your apps > Web app

const firebaseConfig = {
  apiKey: "AIzaSyCYlfeBPpaoHHlxaOPC9c_V0Zl7vtstD8E",
  authDomain: "personal-project-4a813.firebaseapp.com",
  databaseURL: "https://personal-project-4a813-default-rtdb.firebaseio.com",
  projectId: "personal-project-4a813",
  storageBucket: "personal-project-4a813.firebasestorage.app",
  messagingSenderId: "698933139079",
  appId: "1:698933139079:web:07db34ece98bfa6df58a22",
  measurementId: "G-C55LJ91E2N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Auth state observer
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        window.currentUser = user;
        updateUIForUser(user);
        loadUserCart(user.uid);
    } else {
        // User is signed out
        window.currentUser = null;
        updateUIForGuest();
    }
});

// Update UI for logged in user
function updateUIForUser(user) {
    const userNameElements = document.querySelectorAll('#userName, #dropdownUserName');
    const userEmailElements = document.querySelectorAll('#dropdownUserEmail');
    
    userNameElements.forEach(el => {
        if (el) el.textContent = user.displayName || user.email.split('@')[0];
    });
    userEmailElements.forEach(el => {
        if (el) el.textContent = user.email;
    });
}

// Update UI for guest
function updateUIForGuest() {
    const userNameElements = document.querySelectorAll('#userName, #dropdownUserName');
    const userEmailElements = document.querySelectorAll('#dropdownUserEmail');
    
    userNameElements.forEach(el => {
        if (el) el.textContent = 'Guest';
    });
    userEmailElements.forEach(el => {
        if (el) el.textContent = 'Not logged in';
    });
}

// ==================== AUTHENTICATION ====================

// Sign up with email and password
async function signUpWithEmail(email, password, displayName) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Update display name
        await user.updateProfile({ displayName: displayName });
        
        // Create user document in Firestore
        await db.collection('users').doc(user.uid).set({
            email: email,
            displayName: displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            cart: [],
            orders: [],
            wishlist: []
        });
        
        return { success: true, user: user };
    } catch (error) {
        console.error('Sign up error:', error);
        return { success: false, error: error.message };
    }
}

// Sign in with email and password
async function signInWithEmail(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Sign in error:', error);
        return { success: false, error: error.message };
    }
}

// Sign in with Google
async function signInWithGoogle() {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        
        // Check if user document exists, if not create one
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (!userDoc.exists) {
            await db.collection('users').doc(user.uid).set({
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                cart: [],
                orders: [],
                wishlist: []
            });
        }
        
        return { success: true, user: user };
    } catch (error) {
        console.error('Google sign in error:', error);
        return { success: false, error: error.message };
    }
}

// Sign in with GitHub
async function signInWithGitHub() {
    try {
        const provider = new firebase.auth.GithubAuthProvider();
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        
        // Check if user document exists
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (!userDoc.exists) {
            await db.collection('users').doc(user.uid).set({
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                cart: [],
                orders: [],
                wishlist: []
            });
        }
        
        return { success: true, user: user };
    } catch (error) {
        console.error('GitHub sign in error:', error);
        return { success: false, error: error.message };
    }
}

// Sign out
async function signOutUser() {
    try {
        await auth.signOut();
        localStorage.removeItem('gamestylehub-user');
        window.location.href = 'login.html';
        return { success: true };
    } catch (error) {
        console.error('Sign out error:', error);
        return { success: false, error: error.message };
    }
}

// Guest login (anonymous auth)
async function signInAsGuest() {
    try {
        const userCredential = await auth.signInAnonymously();
        localStorage.setItem('gamestylehub-user', JSON.stringify({ isGuest: true }));
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('Guest sign in error:', error);
        return { success: false, error: error.message };
    }
}

// ==================== CART OPERATIONS ====================

// Load user's cart from Firestore
async function loadUserCart(userId) {
    try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            window.cart = userData.cart || [];
            updateCartUI();
        }
    } catch (error) {
        console.error('Error loading cart:', error);
    }
}

// Save cart to Firestore
async function saveCartToFirebase(cart) {
    if (!window.currentUser || window.currentUser.isAnonymous) {
        // For guests, save to localStorage
        localStorage.setItem('gamestylehub-cart', JSON.stringify(cart));
        return;
    }
    
    try {
        await db.collection('users').doc(window.currentUser.uid).update({
            cart: cart
        });
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

// Add item to cart
async function addToCartFirebase(item) {
    if (!window.cart) window.cart = [];
    
    // Check if item already exists
    const existingIndex = window.cart.findIndex(i => i.id === item.id);
    if (existingIndex > -1) {
        window.cart[existingIndex].quantity = (window.cart[existingIndex].quantity || 1) + 1;
    } else {
        item.quantity = 1;
        item.addedAt = new Date().toISOString();
        window.cart.push(item);
    }
    
    await saveCartToFirebase(window.cart);
    updateCartUI();
    showNotification('Added to cart!');
}

// Remove item from cart
async function removeFromCartFirebase(itemId) {
    if (!window.cart) return;
    
    window.cart = window.cart.filter(item => item.id !== itemId);
    await saveCartToFirebase(window.cart);
    updateCartUI();
}

// Update cart item quantity
async function updateCartQuantityFirebase(itemId, quantity) {
    if (!window.cart) return;
    
    const item = window.cart.find(i => i.id === itemId);
    if (item) {
        if (quantity <= 0) {
            await removeFromCartFirebase(itemId);
        } else {
            item.quantity = quantity;
            await saveCartToFirebase(window.cart);
            updateCartUI();
        }
    }
}

// Clear cart
async function clearCartFirebase() {
    window.cart = [];
    await saveCartToFirebase([]);
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!window.cart) window.cart = [];
    
    const totalItems = window.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const totalPrice = window.cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    
    if (cartCount) cartCount.textContent = totalItems;
    if (cartTotal) cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
    if (cartItems) {
        if (window.cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = window.cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="updateCartQuantityFirebase('${item.id}', ${(item.quantity || 1) - 1})">-</button>
                        <span>${item.quantity || 1}</span>
                        <button onclick="updateCartQuantityFirebase('${item.id}', ${(item.quantity || 1) + 1})">+</button>
                        <button class="remove-btn" onclick="removeFromCartFirebase('${item.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }
}

// ==================== ORDERS ====================

// Create a new order
async function createOrder(orderDetails) {
    if (!window.currentUser) {
        return { success: false, error: 'Please sign in to place an order' };
    }
    
    try {
        const order = {
            userId: window.currentUser.uid,
            items: window.cart,
            total: window.cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0),
            status: 'pending',
            shippingAddress: orderDetails.shippingAddress || null,
            paymentMethod: orderDetails.paymentMethod || 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            orderNumber: 'ORD-' + Date.now()
        };
        
        // Add order to orders collection
        const orderRef = await db.collection('orders').add(order);
        
        // Add order reference to user's orders array
        await db.collection('users').doc(window.currentUser.uid).update({
            orders: firebase.firestore.FieldValue.arrayUnion(orderRef.id)
        });
        
        // Clear the cart
        await clearCartFirebase();
        
        return { success: true, orderId: orderRef.id, orderNumber: order.orderNumber };
    } catch (error) {
        console.error('Error creating order:', error);
        return { success: false, error: error.message };
    }
}

// Get user's orders
async function getUserOrders() {
    if (!window.currentUser) return [];
    
    try {
        const ordersSnapshot = await db.collection('orders')
            .where('userId', '==', window.currentUser.uid)
            .orderBy('createdAt', 'desc')
            .get();
        
        return ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error fetching orders:', error);
        return [];
    }
}

// ==================== SCRIMS REGISTRATION ====================

// Register for scrims
async function registerForScrims(registrationData) {
    try {
        const registration = {
            ...registrationData,
            userId: window.currentUser ? window.currentUser.uid : null,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            registrationId: 'REG-' + Date.now()
        };
        
        const regRef = await db.collection('scrims_registrations').add(registration);
        
        // If user is logged in, add to their registrations
        if (window.currentUser && !window.currentUser.isAnonymous) {
            await db.collection('users').doc(window.currentUser.uid).update({
                scrimsRegistrations: firebase.firestore.FieldValue.arrayUnion(regRef.id)
            });
        }
        
        return { success: true, registrationId: regRef.id };
    } catch (error) {
        console.error('Error registering for scrims:', error);
        return { success: false, error: error.message };
    }
}

// Get upcoming scrims/tournaments
async function getUpcomingScrims() {
    try {
        const scrimsSnapshot = await db.collection('scrims')
            .where('date', '>=', new Date())
            .orderBy('date', 'asc')
            .limit(10)
            .get();
        
        return scrimsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error fetching scrims:', error);
        return [];
    }
}

// Get user's scrim registrations
async function getUserScrimRegistrations() {
    if (!window.currentUser) return [];
    
    try {
        const regsSnapshot = await db.collection('scrims_registrations')
            .where('userId', '==', window.currentUser.uid)
            .orderBy('createdAt', 'desc')
            .get();
        
        return regsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error fetching registrations:', error);
        return [];
    }
}

// ==================== WISHLIST ====================

// Add to wishlist
async function addToWishlist(item) {
    if (!window.currentUser || window.currentUser.isAnonymous) {
        showNotification('Please sign in to add to wishlist');
        return { success: false };
    }
    
    try {
        await db.collection('users').doc(window.currentUser.uid).update({
            wishlist: firebase.firestore.FieldValue.arrayUnion(item)
        });
        showNotification('Added to wishlist!');
        return { success: true };
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        return { success: false, error: error.message };
    }
}

// Remove from wishlist
async function removeFromWishlist(itemId) {
    if (!window.currentUser) return { success: false };
    
    try {
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        const wishlist = userDoc.data().wishlist || [];
        const updatedWishlist = wishlist.filter(item => item.id !== itemId);
        
        await db.collection('users').doc(window.currentUser.uid).update({
            wishlist: updatedWishlist
        });
        return { success: true };
    } catch (error) {
        console.error('Error removing from wishlist:', error);
        return { success: false, error: error.message };
    }
}

// Get wishlist
async function getWishlist() {
    if (!window.currentUser) return [];
    
    try {
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        return userDoc.data()?.wishlist || [];
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        return [];
    }
}

// ==================== PRODUCTS ====================

// Get products from Firestore (optional - for dynamic products)
async function getProducts(category = null) {
    try {
        let query = db.collection('products');
        if (category) {
            query = query.where('category', '==', category);
        }
        const snapshot = await query.get();
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// ==================== NEWSLETTER ====================

// Subscribe to newsletter
async function subscribeToNewsletter(email) {
    try {
        await db.collection('newsletter_subscribers').add({
            email: email,
            subscribedAt: firebase.firestore.FieldValue.serverTimestamp(),
            active: true
        });
        return { success: true };
    } catch (error) {
        console.error('Error subscribing:', error);
        return { success: false, error: error.message };
    }
}

// ==================== CONTACT FORM ====================

// Submit contact form
async function submitContactForm(formData) {
    try {
        await db.collection('contact_messages').add({
            ...formData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'unread'
        });
        return { success: true };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return { success: false, error: error.message };
    }
}

// ==================== UTILITY ====================

// Show notification
function showNotification(message, type = 'success') {
    const notif = document.createElement('div');
    notif.className = `notification notification-${type}`;
    notif.style.cssText = `
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: ${type === 'error' ? '#f85149' : '#238636'}; color: white; 
        padding: 15px 30px; border-radius: 50px; font-weight: 500; z-index: 10000;
        box-shadow: 0 5px 30px rgba(0,0,0,0.3); animation: slideUp 0.3s ease;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.style.animation = 'slideDown 0.3s ease forwards';
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

// Export functions for global use
window.firebaseAuth = {
    signUp: signUpWithEmail,
    signIn: signInWithEmail,
    signInWithGoogle,
    signInWithGitHub,
    signOut: signOutUser,
    guestLogin: signInAsGuest
};

window.firebaseCart = {
    add: addToCartFirebase,
    remove: removeFromCartFirebase,
    updateQuantity: updateCartQuantityFirebase,
    clear: clearCartFirebase,
    load: loadUserCart
};

window.firebaseOrders = {
    create: createOrder,
    getAll: getUserOrders
};

window.firebaseScrims = {
    register: registerForScrims,
    getUpcoming: getUpcomingScrims,
    getMyRegistrations: getUserScrimRegistrations
};

window.firebaseWishlist = {
    add: addToWishlist,
    remove: removeFromWishlist,
    getAll: getWishlist
};

console.log('Firebase initialized successfully!');
