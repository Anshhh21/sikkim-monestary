let panorama;

function initMap() {
  console.log("Google Maps API loaded for Enchey");
}

function openVR(lat, lng) {
  const modal = document.getElementById("vr-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  const streetViewDiv = document.getElementById("street-view");
  panorama = new google.maps.StreetViewPanorama(streetViewDiv, {
    position: { lat, lng },
    pov: { heading: 165, pitch: 0 },
    zoom: 1,
    disableDefaultUI: true,
  });
}

function closeVR() {
  const modal = document.getElementById("vr-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  const streetViewDiv = document.getElementById("street-view");
  streetViewDiv.innerHTML = "";
}
