import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import useStyles from '../styles/cardStyle'

function WeatherDtails({ res }) {
    const classStyles = useStyles()
    return (
        <Card className={classStyles.weatherDetails}>
            <CardContent >
                <Grid container style={{ textAlign: "center" }}>
                    <Grid item xs={4} style={{ alignSelf: "center" }}>
                        <Typography>{res.data.main.temp}<sup>o</sup></Typography>
                        <Typography variant="caption">Temperature</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ alignSelf: "center" }}>
                        <Typography>{res.data.main.feels_like}<sup>o</sup></Typography>
                        <Typography variant="caption">Feels Like</Typography>

                    </Grid>
                    <Grid item xs={4} style={{ alignSelf: "center" }}>
                        <Typography>{res.data.main.temp_min}<sup>o</sup></Typography>
                        <Typography variant="caption">Min Temp</Typography>

                    </Grid>
                </Grid>
                <Grid container style={{ textAlign: "center" }}>

                    <Grid item xs={4} style={{ alignSelf: "center" }}>
                        <Typography>{res.data.main.temp_max}<sup>o</sup></Typography>
                        <Typography variant="caption">Max Temp</Typography>

                    </Grid>
                    <Grid item xs={4} style={{ alignSelf: "center" }}>
                        <Typography>{res.data.main.pressure}</Typography>
                        <Typography variant="caption">Pressure</Typography>

                    </Grid>
                    <Grid item xs={4} style={{ alignSelf: "center" }}>
                        <Typography>{res.data.main.humidity}</Typography>
                        <Typography variant="caption">Humidity</Typography>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default WeatherDtails