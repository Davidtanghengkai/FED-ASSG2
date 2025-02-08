// Get current date and time
const date = new Date();

// Create a list with current date values (month, day, hour, minute, AMPM)
const dateList = [
    date.getMonth(), // Current month (0-indexed)
    date.getDate(), // Current day
    date.getHours(), // Current hour (24-hour format)
    date.getMinutes(), // Current minute
    date.getHours() >= 12 ? 'PM' : 'AM' // AM or PM
];

// For now, we're just populating the dateList, no other actions yet
console.log(dateList); // To check the list values
