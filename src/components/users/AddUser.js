import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

const fields = [
  {
    label: "Nimi",
    name: "name"
  },
  {
    label: "Sähköposti",
    name: "email"
  }
]
const AddUser = () => {

  const handleChange = e => {
    const { value, name, id} = e.target
    console.log(value,name,id)
  }
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      spacing={2}
    >
      <Typography>
        Lisää käyttäjä
      </Typography>
      {fields.map(field => <TextField sx={{pt:1}} id={field.name} label={field.label} variant="standard" onChange={handleChange} fullWidth/>)}
      
    </Box>
  )
}

export default AddUser
