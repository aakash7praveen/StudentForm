// Wait for DOMContentLoaded event to ensure the DOM is fully loaded
// DOM Document object loader: represents the structure of the HTML document.
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the form
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Display success message
        alert('Form submitted successfully!');
        //This line reloads the current page. 
        // Reload the page after clicking "OK" in the alert
        location.reload();
    });
});
