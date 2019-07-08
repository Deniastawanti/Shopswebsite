// initialize and add the map
function initMap() {
  // your latitude & longtitude location
  const loc = { lat: -28.389722, lng: 153.566334 };
  // centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  //  the marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}


$('#navbar a, .btn') on ('click', function(event) {
  if (this.hash !==''){
   event.preventDefoult();
    const hash = this.hash;

    $('html, body').animated(
      { 
        scrollTop:$(hash).offset().top - 100
      },
      800
    );
  }
});