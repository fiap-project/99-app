import { useState } from 'react'

import Map from '../../components/Map'

const markers = [
  { lat: -30.02809248684209, lng: -50.89613859471346 },
  { lat: -30.024228265214067, lng: -50.930814192857994 },
]

export default function GoogleMaps() {
  const [location, setLocation] = useState({
    lat: -30.026606265579947,
    lng: -50.956048415270104,
  })

  return (
    <Map
      currentLocation={location}
      markers={markers}
      onChangeLocation={(currentLocation) => setLocation(currentLocation)}
    />
  )
}
