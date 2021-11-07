import { useState } from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'

import * as S from './styles'

type Location = {
  lat: number
  lng: number
}

type Props = {
  currentLocation: Location
  markers: Location[]
  onChangeLocation?: (position: Location) => void
}

function Map({ currentLocation, markers, onChangeLocation }: Props) {
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
        center={currentLocation}
        onClick={(a) => {
          const position = a.latLng?.toJSON()
          if (position && onChangeLocation) onChangeLocation(position)
        }}
      >
        {markers.map((c, index) => (
          <Marker key={index} position={c} />
        ))}
      </GoogleMap>
    </S.Container>
  )
}

export default Map
