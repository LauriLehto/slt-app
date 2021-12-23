import {useState} from 'react'

import Button from '@mui/material/Button'
import Papa from 'papaparse'

import DataTable from '@mui/material/DataTable'

const FileUpload = () => {

  const [data, setData] = useState()

  const onUpload = async(event) => {

    console.log(event.target.files[0])

    const csvFile = event.target.files[0]

    Papa.parse(csvFile, {
      complete: function(results) {
        console.log("Finished:", results.data);
        setData(data)
      }
    });
  }

  return (
    <>
      <Button
        variant="contained"
        component="label"
      >
        Upload File
        <input
          type="file"
          hidden
          onChange={onUpload}
        />
      </Button>
      <DataTable />
    </>
  )
}

export default FileUpload
