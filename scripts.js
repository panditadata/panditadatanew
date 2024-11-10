// Get modal elements
const modal = document.getElementById("iframe-modal");
const modalIframe = document.getElementById("modal-iframe");

// Function to open modal and load iframe source
function openModal(iframeSrc) {
    modalIframe.src = iframeSrc;
    modal.style.display = "flex";
}

// Function to close modal and clear iframe source
function closeModal() {
    modal.style.display = "none";
    modalIframe.src = ""; // Clear the iframe to stop loading
}

// Attach click event to each card to open modal with corresponding iframe
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const iframeSrc = card.getAttribute("data-iframe");
        openModal(iframeSrc);
    });
});
