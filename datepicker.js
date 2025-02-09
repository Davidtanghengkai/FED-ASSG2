document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded and running!"); // Debugging line

    // Define ticket prices
    const PRICES = {
        child: 29,
        adult: 49,
        senior: 39
    };
    
    // Discount codes
    const DISCOUNTS = {
        "zoo10": 0.10 // 10% off
    };

    console.log("Full URL:", window.location.href);
    console.log("Extracted zoo parameter:", getQueryParam('zoo'));
    console.log("Calendar image element found:", document.querySelector(".calendar-image"));


    // Get references to dropdowns, total price display, discount input, and apply button
    const childSelect = document.getElementById("child-count");
    const adultSelect = document.getElementById("adult-count");
    const seniorSelect = document.getElementById("elderly-count");
    const totalPriceText = document.getElementById("total-price-text");
    const discountInput = document.querySelector("input[placeholder='Discount Coupon']");
    const applyButton = document.createElement("button");
    applyButton.textContent = "Apply";
    discountInput.insertAdjacentElement("afterend", applyButton);
    
    let discountApplied = false;
    
    if (!childSelect || !adultSelect || !seniorSelect || !totalPriceText || !discountInput || !applyButton) {
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
        let totalPrice = (numChildren * PRICES.child) +
                         (numAdults * PRICES.adult) +
                         (numSeniors * PRICES.senior);
        
        // Apply discount if valid and applied
        if (discountApplied) {
            const discountCode = discountInput.value.trim().toLowerCase();
            if (DISCOUNTS[discountCode]) {
                const discountAmount = totalPrice * DISCOUNTS[discountCode];
                totalPrice -= discountAmount;
                totalPriceText.innerHTML = `Price: $${totalPrice.toFixed(2)} (Discount Applied!)`;
            } else {
                totalPriceText.innerHTML = `Price: $${totalPrice.toFixed(2)}`;
            }
        } else {
            totalPriceText.innerHTML = `Price: $${totalPrice.toFixed(2)}`;
        }
    }

    // Apply discount when button is clicked
    applyButton.addEventListener("click", function () {
        discountApplied = true;
        updateTotalPrice();
    });

    // Add event listeners to dropdowns
    childSelect.addEventListener("change", updateTotalPrice);
    adultSelect.addEventListener("change", updateTotalPrice);
    seniorSelect.addEventListener("change", updateTotalPrice);

    // Initialize total price
    updateTotalPrice();
});
