import { useState, useEffect, useCallback } from 'react'
import { getRoutesByLatitudeAndLongitude } from '../../api'

import Map from '../../components/Map'

export default function GoogleMaps() {
  const [location, setLocation] = useState<any>(null)
  const [markers, setMakers] = useState<any[]>([])

  const onGetMarkers = useCallback(
    async (latitude: number, longitude: number) => {
      const { data } = await getRoutesByLatitudeAndLongitude(
        latitude,
        longitude
      )
      setMakers(data)
    },
    []
  )

  const onGetCurrentPosition = useCallback(() => {
    const onSuccess = (data: any) => {
      const { latitude, longitude } = data.coords
      setLocation({ lat: latitude, lng: longitude })
      onGetMarkers(latitude, longitude)
    }
    const onError = (error: any) => error

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
  }, [onGetMarkers])

  useEffect(() => {
    onGetCurrentPosition()
  }, [onGetCurrentPosition])

  if (!location) return <div>Searching your location</div>

  return (
    <Map
      currentLocation={location}
      markers={markers}
      onChangeLocation={(currentLocation) => setLocation(currentLocation)}
    />
  )
}
