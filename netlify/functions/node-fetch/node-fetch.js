const fetch = require('node-fetch')

const fetcher = async (url) => await fetch(url, {headers: { Accept: 'application/json' }})

const url = "http://localhost:8080/v1/farms"

const handler = async function () {
  try {
    /* const response = await fetch('http://localhost:8080/v1/farms', {
      headers: { Accept: 'application/json' },
    }) */

    const response = await fetcher(url)

    console.log(response)


    /* const response = await fetch('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' },
    }) */
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
