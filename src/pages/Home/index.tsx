import { useState } from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'

import * as S from './styles'

const markers = [
  { lat: -30.02809248684209, lng: -50.89613859471346 },
  { lat: -30.024228265214067, lng: -50.930814192857994 },
]

export default function GoogleMaps() {
  const [location, setLocation] = useState({
    lat: -30.026606265579947,
    lng: -50.956048415270104,
  })

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY),
  })

  if (loadError || !isLoaded) return null

  return (
    <S.Container>
      <GoogleMap
        mapContainerStyle={{
          width: '100vw',
          height: '100%',
        }}
        zoom={10}
        center={location}
        onClick={(a) => {
          const position = a.latLng?.toJSON()
          console.log(position)
          if (position) setLocation(position)
        }}
      >
        {markers.map((c, index) => (
          <Marker key={index} position={c} />
        ))}
      </GoogleMap>
    </S.Container>
  )
}
