import {useState} from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents ,useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function FlyToClick() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

function ClickMarker() {
  const [position, setPosition] = useState(null)
  
  const map = useMapEvent('click', (e) => {
    console.log(e.latlng)
    setPosition(e.latlng)
  })
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


const Map = () => {

  return (
    <MapContainer  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickMarker />
    </MapContainer>
  )
}

export default Map