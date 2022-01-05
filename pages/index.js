import {useState} from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Grid from '@mui/material/Grid'

import FileUpload from '../src/components/FileUpload'
import 'leaflet/dist/leaflet.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Typography } from '@mui/material'

export default function Home() {
  

  return (
    <div>
      <Grid container direction='row' justifyContent="center" alignItems="center" minHeight="650px" >
        <Typography>Farm App</Typography>
      </Grid>
    </div>
  )
}
