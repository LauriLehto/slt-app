const apiUrl = "https://api.mapbox.com"
const endpoint = "mapbox.places"
const access_token = process.env.MAPBOX_API_KEY

export default async function handler(req, res) {

  console.log(req.query)
  try {
    const url = `${apiUrl}/geocoding/v5/${endpoint}/${req.query.search}.json?access_token=${access_token}`
    const result = await fetch(url)
    console.log(result)
    res.status(200).json({ name: 'John Doe' })

  }catch(error){
    res.status(500).json({error})
  }
}