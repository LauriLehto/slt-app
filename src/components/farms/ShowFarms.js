import {useState} from 'react'
import Grid from '@mui/material/Grid'

import AddData from 'src/components/farms/AddData'
import DataTable from 'src/components/DataTable'

const ShowData = () => {
  const [table, setTable] = useState()

  return (
    <Grid container direction='row' justifyContent="center" alignItems="center" minHeight="650px" >
      <Grid item xs={6}>
        {table && <DataTable data={table.data} headers={table.headers} />}
      </Grid>
      <Grid item xs={6}>
        <AddData setTable={setTable} />
      </Grid>
    </Grid>
  )
}

export default ShowData