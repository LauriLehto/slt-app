const apiUrl =  "http://localhost:8080/v1/farms"

import {prisma} from 'lib/prisma'

const populateFarms = async (farms) => {
  const farmsResult =  await Promise.all(farms.map(async farm => await prisma.farm.create({ data: {...farm}})))
  console.log(farmsResult)
}

/* const farmsResult =  await Promise.all(farms.map(async farm => prisma.farm.findUnique({
  where: {
    id: farm.farm_id
  }
})))
console.log(farmsResult) */
/* var arr = [1, 2, 3, 4, 5];

var results = await Promise.all(arr.map(async (item) => {
    await callAsynchronousOperation(item);
    return item + 1;
}));
 */
export default async function handler(req, res) {

  console.log(req.query)
  try {
    const result = await fetch(apiUrl)
    const data = await result.json()

    populateFarms(data)
    res.status(200).json(data)

  }catch(error){
    res.status(500).json({error})
  }
}
