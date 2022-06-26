import { Box, Card, CardActionArea, Typography } from "@mui/material"
import TouchAppIcon from "@mui/icons-material/TouchApp"
import Logo from "../components/Logo";
import { useStyles } from "../styles"
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {

    const navigate = useNavigate();

    const styles = useStyles();

    const goChooseScreen = () => {
        navigate("/choose")
    }

    return (
        <Card>
            <CardActionArea onClick={goChooseScreen}>
                <Box className={[styles.root, styles.red]}>
                    <Box className={[styles.main, styles.center]}>
                        <Typography component="h6" variant="h6">
                            Fast & Easy
                        </Typography>
                        <Typography component="h1" variant="h1">
                            Order <br /> & pay <br /> here
                        </Typography>
                        <TouchAppIcon fontSize="large"></TouchAppIcon>
                    </Box>
                    <Box className={[styles.center, styles.green]}>
                        <Logo large></Logo>
                        <Typography component="h5" variant="h5">
                            Touch to Start
                        </Typography>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}
export default HomeScreen