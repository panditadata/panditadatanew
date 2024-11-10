// Get modal elements
const modal = document.getElementById("iframe-modal");
const mapIframe = document.getElementById("map-iframe");
const closeModal = document.querySelector(".close");

// Function to open modal and load iframe
function openModal(iframeSrc) {
    mapIframe.src = iframeSrc;
    modal.style.display = "flex";
}

// Close the modal and reset the iframe
closeModal.onclick = function () {
    modal.style.display = "none";
    mapIframe.src = ""; // Clear iframe to stop loading when closed
}

// Close modal when clicking outside the iframe
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        mapIframe.src = "";
    }
}

// Attach click events to each card
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const iframeSrc = card.getAttribute("data-iframe");
        openModal(iframeSrc);
    });
});


