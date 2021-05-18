import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import useStyles from '../styles/cardStyle'



function CardComponent({ res }) {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septamber', 'October', 'November', 'December']
    var sec = res.data.sys.sunrise
    var fullDate = new Date(sec * 1000)
    var date = fullDate.getDate()
    var day = fullDate.getDay()
    var month = fullDate.getMonth()
    // var fullTime = fullDate.toLocaleTimeString();
    //var date = fullDate.split(" ")
    //var time = fullTime.spilt(" ")
    // console.log(fullDate, fullTime)
    // console.log("hello " + weather)

    console.log(date, week[day], months[month])

    const classStyles = useStyles()
    return (
        <Card className={classStyles.locationCard}>
            <CardContent >
                <Typography gutterBottom variant="h4">{`${res.data.name}, ${res.data.sys.country}`}</Typography>
                <Typography gutterBottom variant="body2" component="p">{week[day]} {date} {months[month]}</Typography>
            </CardContent>
        </Card>
    )
}

export default CardComponent