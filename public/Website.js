// Run all JavaScript after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Show/Hide Password Functionality
    const toggle = document.getElementById("passwordToggle");
    const passwordText = document.getElementById("password");

    if (toggle && passwordText) {
        toggle.addEventListener("change", function () {
            passwordText.type = this.checked ? "text" : "password";
        });
    }

    // Search For User Function
    const searchInput = document.getElementById("userSearchText");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchText = searchInput.value.toLowerCase();
            const users = document.querySelectorAll(".user-list-item"); // Adjust selector if needed

            users.forEach(user => {
                const userName = user.textContent.toLowerCase();
                user.style.display = userName.includes(searchText) ? "block" : "none";
            });
        });
    }

    // Notification Dismiss Buttons
    const dismissButtons = document.querySelectorAll(".dismiss-btn");
    dismissButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        });
    });
});
