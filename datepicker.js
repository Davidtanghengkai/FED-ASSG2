// Select the necessary elements
const dateInput = document.querySelector(".date-input");
const datepicker = document.querySelector(".datepicker");

// Add an event listener to show the datepicker when the input is clicked
dateInput.addEventListener("click", () => {
  datepicker.hidden = false; // Show the datepicker
});

// Add a listener to close the datepicker when the 'Cancel' button is clicked
const cancelBtn = datepicker.querySelector(".cancel");
cancelBtn.addEventListener("click", () => {
  datepicker.hidden = true; // Hide the datepicker
});

// Add a listener to close the datepicker when the 'Apply' button is clicked
const applyBtn = datepicker.querySelector(".apply");
applyBtn.addEventListener("click", () => {
  // Set the selected date to the input field (this logic can be expanded)
  dateInput.value = "Selected Date"; // Placeholder for the selected date
  datepicker.hidden = true; // Hide the datepicker after selection
});
