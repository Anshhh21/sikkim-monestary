// js/script.js

function searchMonastery() {
  let query = document.getElementById("searchInput").value.toLowerCase().trim();
  
  if (query.includes("rumtek")) {
    window.location.href = "monastery-rumtek.html";
  } else if (query.includes("enchey")) {
    window.location.href = "monastery-enchey.html";
  } else {
    window.location.href = "monasteries.html";
  }
}
