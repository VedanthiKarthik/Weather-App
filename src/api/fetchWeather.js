import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const APIID = ''

export const fetchData = async (query) => {
    const response = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            appid: APIID
        }
    })
    // console.log(response)
    return response
}
