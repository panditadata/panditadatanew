// scripts.js
function scrollToSections() {
    document.getElementById("map-categories").scrollIntoView({ behavior: "smooth" });
}

function filterMaps() {
    const searchTerm = document.getElementById("mapSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? "block" : "none";
    });
}
