let map;
let panorama;

function initMap() {
  // Enchey Monastery coordinates (approx)
  const encheyLocation = { lat: 27.3457, lng: 88.6117 };

  // Initialize map
  map = new google.maps.Map(document.getElementById("map"), {
    center: encheyLocation,
    zoom: 14,
    mapTypeId: "roadmap",
    streetViewControl: false,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#1c1c1c" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#1c1c1c" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#00bfff" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a2a" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] },
      { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#00bfff" }] }
    ],
  });

  // Initialize Street View
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"),
    {
      position: encheyLocation,
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      visible: false,
    }
  );

  // Link the panorama to the map
  map.setStreetView(panorama);
}

document.addEventListener("DOMContentLoaded", function() {
  const view360Btn = document.getElementById("view360Btn");
  const modal = document.getElementById("vrModal");
  const closeBtn = document.querySelector(".close");

  view360Btn.addEventListener("click", function() {
    modal.style.display = "block";
    panorama.setVisible(true);
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    panorama.setVisible(false);
  });

  window.addEventListener("click", function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
      panorama.setVisible(false);
    }
  });
});
