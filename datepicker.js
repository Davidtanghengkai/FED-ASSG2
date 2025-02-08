document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded and running!"); // Debugging line

    // Define ticket prices
    const PRICES = {
        child: 29,
        adult: 49,
        senior: 39
    };

    // Get references to dropdowns and total price display
    const childSelect = document.getElementById("child-count");
    const adultSelect = document.getElementById("adult-count");
    const seniorSelect = document.getElementById("elderly-count");
    const totalPriceText = document.getElementById("total-price-text");

    if (!childSelect || !adultSelect || !seniorSelect || !totalPriceText) {
        console.error("One or more elements are missing from the HTML.");
        return; // Stops execution if elements are missing
    }

    // Function to update total price
    function updateTotalPrice() {
        console.log("Updating total price..."); // Debugging line

        // Get selected ticket quantities
        const numChildren = parseInt(childSelect.value) || 0;
        const numAdults = parseInt(adultSelect.value) || 0;
        const numSeniors = parseInt(seniorSelect.value) || 0;

        // Calculate total price
        const totalPrice = (numChildren * PRICES.child) +
                           (numAdults * PRICES.adult) +
                           (numSeniors * PRICES.senior);

        // Update the price display
        totalPriceText.innerHTML = `Price: $${totalPrice}`;
    }

    // Add event listeners to dropdowns
    childSelect.addEventListener("change", updateTotalPrice);
    adultSelect.addEventListener("change", updateTotalPrice);
    seniorSelect.addEventListener("change", updateTotalPrice);

    // Initialize total price
    updateTotalPrice();
});
