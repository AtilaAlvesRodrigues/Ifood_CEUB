// --- Data ---
// Mock data representing restaurants
// In a real application, this would come from an API
const popularRestaurantsData = [
    { id: 1, image: null, name: "Nome do Restaurante 1", type: "Tipo de Comida", price: "$$", rating: 4.5, reviews: "1k+", time: "30-45 min", offers: [] },
    { id: 2, image: null, name: "Pizzaria Delícia", type: "Pizza", price: "$$$", rating: 4.8, reviews: "500+", time: "40-55 min", offers: [] },
    { id: 3, image: null, name: "Burger Mania", type: "Hambúrguer", price: "$$", rating: 4.2, reviews: "2k+", time: "25-40 min", offers: [] },
    { id: 4, image: null, name: "Sushi House", type: "Japonesa", price: "$$$$", rating: 4.9, reviews: "800+", time: "50-65 min", offers: [] }
];

const specialOffersData = [
    { id: 5, image: null, name: "Restaurante Bom Preço", type: "Variada", price: "$$", rating: 4.3, reviews: "300+", time: "35-50 min", offers: [{ type: "free-shipping", text: "Frete Grátis" }] },
    { id: 6, image: null, name: "Cantinho do Sabor", type: "Brasileira", price: "$", rating: 4.6, reviews: "750+", time: "45-60 min", offers: [{ type: "discount", text: "15% OFF" }] },
    { id: 7, image: null, name: "Super Lanches", type: "Lanches", price: "$$", rating: 4.0, reviews: "1.5k+", time: "20-35 min", offers: [{ type: "free-shipping", text: "Frete Grátis" }, { type: "discount", text: "Combo Especial" }] },
    { id: 8, image: null, name: "Massa Express", type: "Italiana", price: "$$$", rating: 4.7, reviews: "400+", time: "40-55 min", offers: [{ type: "free-shipping", text: "Frete Grátis" }] }
];

// Combine data for easier global search, adding flags if needed later
// We still render them separately based on original lists
const allRestaurants = [...popularRestaurantsData, ...specialOffersData];

// --- State ---
let currentCategory = 'all'; // Default to 'all'
let currentSearchTerm = '';

// --- DOM Elements ---
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const popularGrid = document.getElementById('popular-restaurants-grid');
const offersGrid = document.getElementById('special-offers-grid');
const cardTemplate = document.getElementById('restaurant-card-template');
const categoryList = document.getElementById('category-list');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeButtons = document.querySelectorAll('.close-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// --- Functions ---

/**
 * Creates a restaurant card element from data using the template.
 * @param {object} restaurantData - The restaurant data object.
 * @returns {HTMLElement} The created restaurant card element.
 */
function createRestaurantCard(restaurantData) {
    const cardClone = cardTemplate.content.cloneNode(true);
    const cardElement = cardClone.querySelector('.restaurant-card');

    cardElement.dataset.id = restaurantData.id; // Set data-id for potential future use
    cardElement.dataset.type = restaurantData.type; // Add type for potential use

    // Populate card elements
    cardElement.querySelector('.card-name').textContent = restaurantData.name;
    cardElement.querySelector('.card-type').textContent = restaurantData.type;
    cardElement.querySelector('.card-price').textContent = restaurantData.price;
    cardElement.querySelector('.rating-value').textContent = restaurantData.rating;
    cardElement.querySelector('.review-count').textContent = restaurantData.reviews;
    cardElement.querySelector('.card-time').textContent = restaurantData.time;

    // Add image logic (placeholder for now)
    const imagePlaceholder = cardElement.querySelector('.card-image');
    if (restaurantData.image) {
        // Example: const img = document.createElement('img'); img.src=restaurantData.image; ... replace placeholder
        imagePlaceholder.textContent = ''; // Clear "Imagem" text if an image were added
        // Add actual image element here if URL provided
    } else {
        imagePlaceholder.textContent = 'Imagem Indisponível'; // Update placeholder text
    }

    // Populate offer tags
    const offerTagsContainer = cardElement.querySelector('.offer-tags');
    offerTagsContainer.innerHTML = ''; // Clear any default content
    restaurantData.offers.forEach(offer => {
        const tag = document.createElement('span');
        tag.classList.add('offer-tag', offer.type); // e.g., 'offer-tag', 'free-shipping'
        tag.textContent = offer.text;
        offerTagsContainer.appendChild(tag);
    });

    return cardElement;
}

/**
 * Renders a list of restaurants into a specified grid container.
 * @param {Array<object>} restaurants - Array of restaurant data objects.
 * @param {HTMLElement} containerElement - The container element to render into.
 */
function renderRestaurants(restaurants, containerElement) {
    containerElement.innerHTML = ''; // Clear previous content
    if (restaurants.length === 0) {
        containerElement.innerHTML = '<p>Nenhum restaurante encontrado para esta seleção.</p>'; // Show message if no results
        return;
    }
    restaurants.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        containerElement.appendChild(card);
    });
}

/**
 * Filters restaurants based on the search term and selected category.
 * @param {string} searchTerm - The term to filter by.
 * @param {string} category - The category to filter by ('all' for no category filter).
 * @param {Array<object>} dataSet - The dataset to filter (e.g., popularRestaurantsData).
 * @returns {Array<object>} The filtered array of restaurants.
 */
function filterRestaurants(searchTerm, category, dataSet) {
    const lowerCaseTerm = searchTerm.toLowerCase().trim();

    return dataSet.filter(restaurant => {
        // Category check
        const categoryMatch = category === 'all' || restaurant.type.toLowerCase() === category.toLowerCase();

        // Search term check
        const searchMatch = !lowerCaseTerm ||
            restaurant.name.toLowerCase().includes(lowerCaseTerm) ||
            restaurant.type.toLowerCase().includes(lowerCaseTerm); // Optional: search type too

        return categoryMatch && searchMatch;
    });
}

/**
 * Handles the search and filtering operation, then re-renders.
 */
function handleFilterAndSearch() {
    currentSearchTerm = searchInput.value; // Update current search term
    const filteredPopular = filterRestaurants(currentSearchTerm, currentCategory, popularRestaurantsData);
    const filteredOffers = filterRestaurants(currentSearchTerm, currentCategory, specialOffersData);

    renderRestaurants(filteredPopular, popularGrid);
    renderRestaurants(filteredOffers, offersGrid);
}

/**
 * Updates the active state of category buttons.
 * @param {string} selectedCategory - The data-category value of the selected button.
 */
function updateActiveCategoryButton(selectedCategory) {
    document.querySelectorAll('.category-item').forEach(button => {
        if (button.dataset.category.toLowerCase() === selectedCategory.toLowerCase()) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

/**
 * Opens a specific modal.
 * @param {string} modalId - The ID of the modal to open.
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    }
}

/**
 * Closes any open modal.
 */
function closeModal() {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
    modalOverlay.style.display = 'none';
}

// --- Event Listeners ---

// Search button click
searchButton.addEventListener('click', handleFilterAndSearch);

// Real-time search on input
searchInput.addEventListener('input', handleFilterAndSearch);

// Category button clicks (using event delegation on the list)
categoryList.addEventListener('click', (event) => {
    if (event.target.classList.contains('category-item')) {
        const selectedCategory = event.target.dataset.category;
        // console.log(`Category clicked: ${selectedCategory}`);
        currentCategory = selectedCategory; // Update current category
        updateActiveCategoryButton(selectedCategory);
        handleFilterAndSearch(); // Re-filter and render
    }
});

// Event delegation for restaurant card clicks (more efficient for dynamic content)
function handleCardClick(event) {
    // Find the closest ancestor which is a restaurant card
    const card = event.target.closest('.restaurant-card');
    if (card) {
        const restaurantName = card.querySelector('h3.card-name').textContent;
        const restaurantId = card.dataset.id; // Get the ID if needed
        alert(`Você clicou no restaurante: ${restaurantName} (ID: ${restaurantId || 'N/A'})`);
        // Future enhancement: Navigate to a restaurant detail page using the ID
    }
}

// Add click listeners to the grids (event delegation)
popularGrid.addEventListener('click', handleCardClick);
offersGrid.addEventListener('click', handleCardClick);

// Modal Event Listeners
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('login-modal');
});

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('register-modal');
});

// Close modals via close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        closeModal();
    });
});

// Close modals via overlay click
modalOverlay.addEventListener('click', closeModal);

// Basic Form Submission Handling (replace with actual logic)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Login form submitted:');
    console.log('Email:', document.getElementById('login-email').value);
    // Add actual login logic here (e.g., API call)
    alert('Tentativa de login (ver console).');
    closeModal();
    loginForm.reset(); // Clear the form
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return; // Stop submission
    }

    console.log('Register form submitted:');
    console.log('Nome:', document.getElementById('register-name').value);
    console.log('Email:', document.getElementById('register-email').value);
    // Add actual registration logic here (e.g., API call)
    alert('Tentativa de cadastro (ver console).');
    closeModal();
    registerForm.reset(); // Clear the form
});

// --- Initial Page Load ---
console.log("UniXepa page loaded. Rendering initial restaurants.");
updateActiveCategoryButton(currentCategory); // Set initial active button
handleFilterAndSearch(); // Initial render based on default filters ('all', '')