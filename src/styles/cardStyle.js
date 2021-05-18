import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((themes) => ({
    cardBig: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "white",
        minWidth: 375,
        display: "inline-block",
        margin: "80px 0px 0px 30px",
        borderRadius: "10px",

    },

    weatherDetails: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "white",
        minWidth: 400,
        display: "inline-block",
        margin: "80px 0px 0px 30px",
        borderRadius: "10px",
    },

    locationCard: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "white",
        minWidth: 275,
        display: "inline-block",
        margin: "40px 0px 0px 30px",
        borderRadius: "10px",
    }

}))


export default useStyles