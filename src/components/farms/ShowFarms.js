import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'

import AddData from 'src/components/farms/AddData'
import DataTable from 'src/components/DataTable'
import DataTable2 from 'src/components/DataTable2'

const ShowData = (props) => {

  const { farms } = props
  console.log(farms)
  const [table, setTable] = useState()

  useEffect(async()=> {
    try {
/*       await fetch('/.netlify/functions/node-fetch',)*/
      await fetch('/api/farms',)
      .then(res => res.json())
      .then(data => console.log(data))
    }catch(error) {
      console.error(error)
    }
    
  })

  return (
    <Grid container direction='row' justifyContent="center" alignItems="center" minHeight="650px" >
      <Grid item xs={6}>
        {table && <DataTable2 data={table.data} headers={table.headers} />}
      </Grid>
      <Grid item xs={6}>
        <AddData setTable={setTable} />
      </Grid>
    </Grid>
  )
}

export async function getStaticProps() {

  /* const prisma = new PrismaClient()
  const farms = await prisma.farms.findMany()*/
  console.log(result)
  return {
    farms : { result }
  }
}

export default ShowData