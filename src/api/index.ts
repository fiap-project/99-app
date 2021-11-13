import axios from 'axios'

const data = [
  { lat: -30.02809248684209, lng: -50.89613859471346 },
  { lat: -30.024228265214067, lng: -50.930814192857994 },
]

export const getRoutesByLatitudeAndLongitude = async (latitude: number, longitude: number) => {
  if (!latitude || !longitude) throw Error('Invalid params')
  const { data } = await axios.get(String(process.env.REACT_APP_API_URL))

  return { data }
}
