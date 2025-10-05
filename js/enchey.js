

let panorama;

// Function to open VR modal
function openVR(lat, lng) {
  const modal = document.getElementById("vr-modal");
  const streetViewDiv = document.getElementById("street-view");

  // Show the modal first
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Wait a short moment for the modal to render
  setTimeout(() => {
    // If Google Maps is not loaded yet, load it dynamically
    if (typeof google === "undefined") {
      loadGoogleMaps(() => initializePanorama(lat, lng));
    } else {
      initializePanorama(lat, lng);
    }
  }, 300);
}

// Function to close modal
function closeVR() {
  const modal = document.getElementById("vr-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  if (panorama) {
    panorama.setVisible(false);
  }
}

// Load Google Maps dynamically only when needed
function loadGoogleMaps(callback) {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
  script.async = true;
  document.head.appendChild(script);

  // When loaded, call the callback
  window.initMap = callback;
}

// Initialize panorama correctly
function initializePanorama(lat, lng) {
  const streetViewDiv = document.getElementById("street-view");

  if (!streetViewDiv) {
    console.error("Street View container not found!");
    return;
  }

  panorama = new google.maps.StreetViewPanorama(streetViewDiv, {
    position: { lat, lng },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    visible: true,
  });

  console.log("✅ Panorama initialized successfully!");
}
