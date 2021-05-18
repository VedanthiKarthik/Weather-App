import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import useStyles from '../styles/cardStyle'



function MianDetails({ res }) {

    // const renderImg = async (icon) => {
    //     console.log(icon)
    //     const image = await axios.get(`https://openweathermap.org/img/wn/${icon}@2x.png`)
    //     await console.log(image)
    //     return image
    // }

    // console.log(renderImg(res.weather[0].icon))
    const classStyles = useStyles()
    return (
        <Card className={classStyles.cardBig}>
            <CardContent >
                <Grid container>
                    <Grid item xs={6} style={{ alignSelf: "center", textAlign: "center" }}>
                        <img width="150px" alt="weather-img" src={`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`} />
                    </Grid>
                    <Grid item xs={6} direction="column" style={{ alignSelf: "center", textAlign: "center" }}>
                        <Grid item xs={12}><Typography variant="h2">{res.data.main.temp}<sup style={{ fontSize: "25px" }}>o</sup></Typography></Grid>
                        <Grid item xs={12}> <Typography variant="body1">{res.data.weather[0].description}</Typography></Grid>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}

export default MianDetails