import Grid from '@mui/material/Grid'

import UsersList from 'src/components/users/UsersList'
import AddUser from 'src/components/users/AddUser'

const index = () => {
  return (
    <Grid container style={{marginTop:'10px'}}>
      <Grid item xs={6}>
        <UsersList />
      </Grid>
      <Grid item xs={6}>
        <AddUser />
      </Grid>
    </Grid>
  )
}

export default index
