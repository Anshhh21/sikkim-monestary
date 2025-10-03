function searchMonastery() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();

    if(input === 'rumtek') {
        window.location.href = 'rumtek.html';
    } else if(input === 'enchey') {
        window.location.href = 'enchey.html';
    } else {
        // If nothing or unknown text, open explore page
        window.location.href = 'explore.html';
    }
}

// Optional: Make Explore button redirect to explore page
document.getElementById('exploreBtn').addEventListener('click', () => {
    window.location.href = 'explore.html';
});
