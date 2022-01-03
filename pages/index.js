import {useState} from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Grid from '@mui/material/Grid'

import FileUpload from '../src/components/FileUpload'
import DataTable from '../src/components/DataTable'
import 'leaflet/dist/leaflet.css'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Home() {
  const [data, setData] = useState()

  const Map = dynamic(
    () => import('../src/components/mapbox/Map'), 
    { ssr: false }
  )

  return (
    <div>
      <Grid container direction='row' justifyContent="center" alignItems="center" minHeight="650px" >
        <Grid item xs={6}> 
          <Grid container direction="column" alignItems="end" justifyContent="center" spacing={2}>
            <Map />
            <FileUpload setData={setData} />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {data && <DataTable data={data} />}
        </Grid>
      </Grid>
    </div>
  )
}
