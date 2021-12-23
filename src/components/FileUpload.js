
import Button from '@mui/material/Button'
import Papa from 'papaparse'


const FileUpload = (props) => {

  

  const onUpload = async(event) => {

    console.log(event.target.files[0])

    const csvFile = event.target.files[0]

    Papa.parse(csvFile, {
      complete: function(results) {
        console.log("Finished:", results.data);
        props.setData(results.data)
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
    </>
  )
}

export default FileUpload
