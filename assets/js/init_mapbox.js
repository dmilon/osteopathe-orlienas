const initMapbox = () => {
  const mapElement = document.querySelector('#map')
  if (mapElement) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZG1pbG9uIiwiYSI6ImNrdHlpejZ3eTFleGUybnA4N2Rwa2J2a24ifQ.O8GDpHfLESId83b0vaJCAA'

    // create the map
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [4.718677865667819, 45.6585695829587],
      zoom: 10
    })

    const popup = `
      <p class="ff-open-sans fw-bold mb-0">Thibaud Colombel</p>
      <p class="ff-open-sans fw-bold">Ostéopathe D.O.</p>
      <p class="ff-open-sans mb-0">201 rue des Veloutiers</p>
      <p class="ff-open-sans">69530 Orliénas</p>
      <p class="ff-open-sans fw-bold"><a href="https://www.google.com/maps/dir//Thibaud+Colombel+-+Ost%C3%A9opathe+D.O./@45.658454,4.6486109,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47f4ebb545f4a7c7:0x3f25f7330d67b73f!2m2!1d4.7186507!2d45.6584754">Itinéraire</a></p>
    `

    // add a marker
    new mapboxgl.Marker({color: '#22B7CE'})
      .setLngLat([4.718677865667819, 45.6585695829587])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add a popup
          .setHTML(popup)
      )
      .addTo(map)

    // add controls
    map.addControl(new mapboxgl.NavigationControl())
  }
}

initMapbox()
