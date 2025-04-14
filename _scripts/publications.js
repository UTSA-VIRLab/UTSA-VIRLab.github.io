{
    document.addEventListener("DOMContentLoaded", function() {
        // Open the global BibTeX modal when any BibTeX button is clicked.
        var bibtexButtons = document.querySelectorAll(".show-bibtex");
        bibtexButtons.forEach(function(btn) {
            btn.addEventListener("click", function() {
                // Retrieve the BibTeX text from the data-bibtex attribute.
                var bibtexContent = this.getAttribute("data-bibtex");
                var modal = document.getElementById("globalBibtexModal");
                var preElement = document.getElementById("globalBibtexContent");
                if (bibtexContent && modal && preElement) {
                    preElement.innerHTML = bibtexContent;
                    modal.style.display = "block";
                }
            });
        });

        // Close the global modal when clicking the close button.
        var closeBtn = document.querySelector("#globalBibtexModal .close");
        if (closeBtn) {
            closeBtn.addEventListener("click", function() {
                document.getElementById("globalBibtexModal").style.display = "none";
            });
        }

        // Close the global modal when clicking outside the modal content.
        window.addEventListener("click", function(event) {
            var modal = document.getElementById("globalBibtexModal");
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        // Attach copy-to-clipboard functionality for the Copy button.
        var copyBtn = document.querySelector(".copy-bibtex");
        if (copyBtn) {
            copyBtn.addEventListener("click", function() {
                var targetId = this.getAttribute("data-target");
                var preElement = document.getElementById(targetId);
                if (preElement) {
                    var textToCopy = preElement.innerText.trim();
                    navigator.clipboard.writeText(textToCopy).then(function() {
                        copyBtn.innerText = "Copied!";
                        setTimeout(function() {
                            copyBtn.innerText = "Copy";
                        }, 2000);
                    }).catch(function(err) {
                        console.error("Failed to copy: ", err);
                    });
                }
            });
        }
    });
}