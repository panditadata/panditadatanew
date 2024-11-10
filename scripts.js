// Modal elements
const modal = document.getElementById("iframe-modal");
const mapIframe = document.getElementById("map-iframe");
const closeModal = document.querySelector(".close");

// Open modal and load the iframe source
function openModal(iframeSrc) {
    mapIframe.src = iframeSrc;
    modal.style.display = "flex";
}

// Close modal and clear iframe source
closeModal.onclick = function () {
    modal.style.display = "none";
    mapIframe.src = ""; // Clears the iframe to stop loading
}

// Close modal when clicking outside the iframe
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        mapIframe.src = "";
    }
}

// Attach click events to each card for lazy loading
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const iframeSrc = card.getAttribute("data-iframe");
        openModal(iframeSrc);
    });
});
