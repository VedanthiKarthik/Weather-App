import { makeStyles } from '@material-ui/core/styles'


const styles = makeStyles((themes) => ({
    icon: {
        fontSize: 50,
        color: "white",
        margin: "0px 10px"
    },

    appBar: {
        backgroundColor: "rgba(255, 255, 255, 0.3)"
    },

    title: {
        color: "white",
        fontStyle: "bold",
        fontFamily: "Comic Sans MS, Comic Sans, cursive"
    },

    container: {
        width: "500px"
    }

}))

export default styles