import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    navy: {
        backgroundColor: "#003080"
    },
    red: {
        backgroundColor: "#ff2040",
        color: "#ffffff"
    },
    main: {
        flex: 1,
        overflow: "auto",
        flexDirection: "column",
        display: "flex",
        color: "#ffffff",
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    green: {
        backgroundColor: "#00b020"
    },
    largeLogo: {
        height: 100,
    },
    logo: {
        height: 50,
    },
    cards: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        margin: 10,
    },
    title: {
        marginTop: 18,
        color: "black"
    },
    title1: {
        marginTop: 18,
        color: "white"
    },
    space: {
        padding: 10,
    },
    media: {
        width: 200,
    },
    mycard: {
        margin: 10,
        padding: 10,
    },
    largeButton: {
        width: 250,
    },
    largeInput: {
        width: "60px!important",
        padding: "0!important",
        fontSize: "35px!important",
        textAlign: "center!important",
    },
    bordered: {
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        borderStyle: "solid",
    },
    row: {
        display: "flex",
        padding: 10,
    },
    around: {
        justifyContent: "space-around",
    },
    between: {
        justifyContent: "space-between",
    },
    column: { flexDirection: "column" }
}))