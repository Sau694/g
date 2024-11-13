document.querySelectorAll('.nav_links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Expand card with text and image
function expandCard(card) {
    const expandedCard = document.getElementById("expandedCard");
    expandedCard.style.display = "flex";
    document.getElementById("expandedImage").src = card.getAttribute("data-image");
    document.getElementById("expandedTitle").textContent = card.querySelector("h3").textContent;
    document.getElementById("expandedDescription").textContent = card.getAttribute("data-description");
    document.getElementById("expandedFee").textContent = "Service Fee: " + card.getAttribute("data-fee");
    expandedCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Close expanded card
function closeCard() {
    document.getElementById("expandedCard").style.display = "none";
}