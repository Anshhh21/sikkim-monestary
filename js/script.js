function searchMonastery() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();

    if(input === 'rumtek') {
        window.location.href = 'rumtek.html';
    } else if(input === 'enchey') {
        window.location.href = 'enchey.html';
    } else {
        window.location.href = 'monasteries.html';
    }
}

document.getElementById('exploreBtn').addEventListener('click', () => {
    window.location.href = 'monasteries.html';
});
