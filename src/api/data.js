const initialData = {
    "data": {
        "coord": {
            "lon": 76,
            "lat": 13.5
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 30.12,
            "feels_like": 31.07,
            "temp_min": 30.12,
            "temp_max": 30.12,
            "pressure": 1007,
            "humidity": 49,
            "sea_level": 1007,
            "grnd_level": 924
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.18,
            "deg": 231,
            "gust": 5.83
        },
        "clouds": {
            "all": 99
        },
        "dt": 1621237283,
        "sys": {
            "country": "IN",
            "sunrise": 1621211373,
            "sunset": 1621257327
        },
        "timezone": 19800,
        "id": 1267701,
        "name": "Karnataka",
        "cod": 200
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "494",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "url": "https://api.openweathermap.org/data/2.5/weather",
        "method": "get",
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "params": {
            "q": "karnataka",
            "units": "metric",
            "appid": "ab2df991070af5697ecf3a63cb25e566"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1
    },
    "request": {}
}
// { "coord": { "lon": 76, "lat": 13.5 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 30.31, "feels_like": 30.58, "temp_min": 30.31, "temp_max": 30.31, "pressure": 1008, "humidity": 44, "sea_level": 1008, "grnd_level": 925 }, "visibility": 10000, "wind": { "speed": 5.73, "deg": 217, "gust": 6.7 }, "clouds": { "all": 100 }, "dt": 1621235878, "sys": { "country": "IN", "sunrise": 1621211373, "sunset": 1621257327 }, "timezone": 19800, "id": 1267701, "name": "Karnataka", "cod": 200 }


//     {"coord": {
//         "lon": 76,
//         "lat": 13.5
//     },
//     "weather": [{
//         "id": 804,
//         "main": "Clouds",
//         "description": "overcast clouds",
//         "icon": "04n"
//     }],
//     "base": "stations",
//     "main": {
//         "temp": 295.3,
//         "feels_like": 295.66,
//         "temp_min": 295.3,
//         "temp_max": 295.3,
//         "pressure": 1008,
//         "humidity": 80,
//         "sea_level": 1008,
//         "grnd_level": 922
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 6.63,
//         "deg": 212,
//         "gust": 12.1
//     },
//     "clouds": {
//         "all": 100
//     },
//     "dt": 1621174494,
//     "sys": {
//         "country": "IN",
//         "sunrise": 1621124986,
//         "sunset": 1621170910
//     },
//     "timezone": 19800,
//     "id": 1267701,
//     "name": "Karnataka",
//     "cod": 200
// }

export default initialData