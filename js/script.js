function searchMonastery() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    if(input.includes('rumtek')) {
        window.location.href = 'rumtek.html';
    } else if(input.includes('enchey')) {
        window.location.href = 'enchey.html';
    } else {
        alert('Monastery not found! Try "Rumtek" or "Enchey".');
    }
}
