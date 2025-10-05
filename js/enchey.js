let panorama;

function initMap() {
  const encheyLocation = { lat: 27.3386, lng: 88.6061 }; // approx coords

  // Initialize but keep invisible until modal is opened
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"),
    {
      position: encheyLocation,
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      visible: false,
    }
  );
}

// Function to open modal and activate Street View
function openVR(lat, lng) {
  const modal = document.getElementById("vr-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  if (panorama) {
    panorama.setPosition({ lat, lng });
    panorama.setVisible(true);
  } else {
    console.error("Panorama not initialized yet!");
  }
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

window.initMap = initMap; // ✅ important for Google callback
