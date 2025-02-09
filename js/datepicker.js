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

    // Get references to dropdowns, total price display, discount input, and apply button
    const childSelect = document.getElementById("child-count");
    const adultSelect = document.getElementById("adult-count");
    const seniorSelect = document.getElementById("elderly-count");
    const totalPriceText = document.getElementById("total-price-text");
    const discountInput = document.querySelector("input[placeholder='Discount Coupon']");
    const applyButton = document.createElement("button");
    applyButton.textContent = "Apply";
    discountInput.insertAdjacentElement("afterend", applyButton);

    // Get reference to the datepicker and buy tickets button
    const datepicker = document.getElementById("datepicker");
    const buyTicketsButton = document.querySelector("a[href='reciept.html']");
    
    let discountApplied = false;
    
    if (!childSelect || !adultSelect || !seniorSelect || !totalPriceText || !discountInput || !applyButton || !datepicker || !buyTicketsButton) {
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

        // Check if the datepicker is filled out
        if (datepicker.value) {
            buyTicketsButton.style.pointerEvents = "auto"; // Enable the button
            buyTicketsButton.style.opacity = "1"; // Make the button visible
            buyTicketsButton.style.backgroundColor = "#4CAF50"; // Green when enabled
        } else {
            buyTicketsButton.style.pointerEvents = "none"; // Disable the button
            buyTicketsButton.style.opacity = "0.5"; // Make the button look disabled
            buyTicketsButton.style.backgroundColor = "#B0B0B0"; // Grey when disabled
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
    
    // Add event listener to datepicker to trigger update on date selection
    datepicker.addEventListener("change", updateTotalPrice);

    // Initialize total price and button state
    updateTotalPrice();
});
