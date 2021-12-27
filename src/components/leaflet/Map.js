import {useState} from 'react'
import { Input } from '@mui/material';
import TextField from '@mui/material/TextField'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents ,useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import MapSearch from './MapSearch'

function ClickMarker(props) {
  
  useMapEvent('click', (e) => {
    console.log(e.latlng)
    props.setPosition(e.latlng)
  })
  return props.position === null ? null : (
    <Marker position={props.position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const Map = () => {

  const [position, setPosition] = useState(null)
  const [text, setText] = useState('')
  console.log(process.env.MAPBOX_API_KEY)

  const handleChange = async (e) => {
    setText(e.target.value)
    try {
      const results = await fetch(`/api/mapbox?search=${e.target.value}`)
      console.log(results)
    }catch(error){
      console.error(error)
    }
  }

  return (
    <>
      <TextField id="outlined-basic" label="Search" onChange={handleChange} value={text} variant="outlined" sx={{width:"100%"}}/>
      <MapContainer  center={[61, 24.9]} zoom={7} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
        {/* <MapSearch /> */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickMarker position={position} setPosition={setPosition} />
    </MapContainer>
    </>
  )
}

export default Map