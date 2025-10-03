function searchMonastery() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    if (input.includes("rumtek")) {
        window.location.href = "monastery-rumtek.html";
    } else if (input.includes("enchey")) {
        window.location.href = "monastery-enchey.html";
    } else {
        alert("No results found. Try 'Rumtek' or 'Enchey'.");
    }
}
