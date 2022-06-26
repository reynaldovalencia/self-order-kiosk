import React from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useStyles } from "../styles";

const PaymentScreen = () => {
    const styles = useStyles();
    const navigate = useNavigate();

    const goCompleteScreen = () => {
        navigate("/complete")
    }

    return (
        <Box className={[styles.root, styles.navy]}>
            <Box className={[styles.main, styles.center]}>
                <Box>
                    <Logo large></Logo>
                    <Typography
                        gutterBottom
                        className={styles.title}
                        variant="h3"
                        component="h3"
                    >
                        Please follow the instruction on the PIN pad
                    </Typography>
                    <CircularProgress />
                </Box>
            </Box>
            <Box className={[styles.center, styles.space]}>
                <Button
                    onClick={goCompleteScreen}
                    variant="contained"
                    color="primary"
                    className={styles.largeButton}
                >
                    Complete Order
                </Button>
            </Box>
        </Box>
    );
}
export default PaymentScreen