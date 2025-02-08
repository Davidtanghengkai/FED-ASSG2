// Prices for child, adult, and senior
const priceChild = 29;   // Price per child ticket
const priceAdult = 49;   // Price per adult ticket
const priceSenior = 39;  // Price per senior ticket

// Get DOM elements for the select dropdowns and the price display h1
const childSelect = document.getElementById('child-count');
const adultSelect = document.getElementById('adult-count');
const elderlySelect = document.getElementById('elderly-count');
const priceDisplay = document.getElementById('price-display');

// Function to calculate total price
function calculateTotalPrice() {
    const childCount = parseInt(childSelect.value, 10);
    const adultCount = parseInt(adultSelect.value, 10);
    const elderlyCount = parseInt(elderlySelect.value, 10);

    // Calculate the total price
    const totalPrice = (childCount * priceChild) + (adultCount * priceAdult) + (elderlyCount * priceSenior);

    // Display the total price in the h1 tag
    priceDisplay.textContent = `$${totalPrice}`;
}

// Add event listeners to each select dropdown
childSelect.addEventListener('change', calculateTotalPrice);
adultSelect.addEventListener('change', calculateTotalPrice);
elderlySelect.addEventListener('change', calculateTotalPrice);

// Call the function once on page load to initialize the price
calculateTotalPrice();
