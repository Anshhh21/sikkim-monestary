

let panorama;
let mapLoaded = false;

function loadGoogleMaps(callback) {
  if (mapLoaded) {
    callback();
    return;
  }

  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCqsgV0VjTV4Vv0NkJMts8XlUoP2-OPSNs&callback=initMap";
  script.async = true;
  document.head.appendChild(script);

  window.initMap = () => {
    mapLoaded = true;
    callback();
  };
}

function openVR(lat, lng) {
  const modal = document.getElementById("vr-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  loadGoogleMaps(() => {
    const location = { lat, lng };

    panorama = new google.maps.StreetViewPanorama(
      document.getElementById("street-view"),
      {
        position: location,
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
        visible: true,
      }
    );
  });
}

function closeVR() {
  const modal = document.getElementById("vr-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  if (panorama) {
    panorama.setVisible(false);
  }
}
