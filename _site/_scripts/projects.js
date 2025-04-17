document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("descriptionModal");
    var modalContent = document.getElementById("modalDescriptionContent");
    var closeBtn = document.querySelector(".modal .close");

    // Close modal when clicking on the close button
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Attach click event listeners to all "Show More" buttons
    var buttons = document.querySelectorAll(".show-description");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var description = this.getAttribute("data-description");
            modalContent.innerHTML = description;
            modal.style.display = "block";
        });
    });
});