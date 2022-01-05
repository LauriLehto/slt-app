const apiUrl =  "http://localhost:8080/v1/farms"

/* import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const populateFarms = async (farms) => {
  const farmsResult = farms.map(farm => await prisma.farm.create(farm))
  console.log(farmsResult)
} */

export default async function handler(req, res) {

  console.log(req.query)
  try {
    const result = await fetch(apiUrl)
    const data = await result.json()

    /* populateFarms(data) */
    res.status(200).json(data)

  }catch(error){
    res.status(500).json({error})
  }
}
