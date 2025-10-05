let panorama;

function openVR(lat = 27.3355, lng = 88.6056) {
  document.getElementById('vr-modal').classList.remove('hidden');
  
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'), {
      position: { lat: lat, lng: lng },
      pov: { heading: 0, pitch: 0 },
      zoom: 1
    }
  );
  
  // Gyroscope support for mobile
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
      if(!panorama) return;
      let alpha = event.alpha || 0;
      let beta = event.beta || 0;
      panorama.setPov({ heading: alpha, pitch: beta });
    }, true);
  }
}

function closeVR() {
  document.getElementById('vr-modal').classList.add('hidden');
}
