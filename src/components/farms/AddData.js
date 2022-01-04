import {useState} from 'react'
import dynamic from 'next/dynamic'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

import FileUpload from 'src/components/FileUpload'
import 'leaflet/dist/leaflet.css'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function AddData(props) {

  const [ mapProps, updateMapProps ] = useState({ lng:25, lat:60.5, zoom: 7})
  const { setTable } = props

  const Map = dynamic(
    () => import('src/components/mapbox/Map'), 
    { ssr: false }
  )

  const handleUpload = (upload) => {

    const tableHeaders = upload[0]
    let tableData = upload.slice(1)

    console.log(tableData)
    console.log(tableData.length)
    
    tableData = tableData.filter(d => {
      //validate data according to specs
      if(typeof d[2]==='string'/* checking typeof of data and if data exists for row*/){
        const type = d[2].toLowerCase()
        if(type==='ph' && d[3]>=0 && d[3]<=14){
          return d
        }else if(type==='rainfall' && d[3]>=0 &&d[3]<=100){
          return d
        }else if(type==='temperature' && d[3]<=100 && d[3]>=-50){
          return d
        }
      }
    })

    console.log(tableData.length)

    setTable({ headers:tableHeaders, data:tableData })
  }

  return (
    <Stack spacing={2} direction="column">
      <Map updateMap={updateMapProps} mapProps={mapProps} />
      <Stack>
        <TextField label="Longitude" value={mapProps ? mapProps.lng : ''} disabled></TextField>
        <TextField label="Latitude" value={mapProps ? mapProps.lat: ''} disabled></TextField>
      </Stack>
      <Stack spacing={2} direction="row">
        <FileUpload handleUpload={handleUpload} />
        <Button variant="contained" >Save to database</Button>
      </Stack>
    </Stack>
  )
}
