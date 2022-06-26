import React from "react";
import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import Logo from "../components/Logo";
import { useStyles } from "../styles";
import { Store } from "../store";
import { createOrder } from "../actions";
import { useNavigate } from "react-router-dom";

const CompleteOrderScreen = (props) => {
    const styles = useStyles();
    const { state, dispatch } = useContext(Store);
    const { order } = state;
    const { loading, error, newOrder } = state.orderCreate;
    const navigate = useNavigate()

    useEffect(() => {
        if (order.orderItems.length > 0) {
            createOrder(dispatch, order);
        }
    }, [order, dispatch]);

    const irInicio = () => {
        navigate("/")
    }

    return (
        <Box className={[styles.root, styles.navy]}>
            <Box className={[styles.main, styles.center]}>
                <Box>
                    <Logo large></Logo>
                    {loading ? (
                        <CircularProgress></CircularProgress>
                    ) : error ? (
                        <Alert severity="error">{error}</Alert>
                    ) : (
                        <>
                            <Typography
                                gutterBottom
                                className={styles.title1}
                                variant="h3"
                                component="h3"
                            >
                                Your order has been placed
                            </Typography>
                            <Typography
                                gutterBottom
                                className={styles.title1}
                                variant="h1"
                                component="h1"
                            >
                                Thank you!
                            </Typography>
                            <Typography
                                gutterBottom
                                className={styles.title1}
                                variant="h3"
                                component="h3"
                            >
                                Your order number is {newOrder.number}
                            </Typography>
                        </>
                    )}
                </Box>
            </Box>
            <Box className={[styles.center, styles.space]}>
                <Button
                    onClick={irInicio}
                    variant="contained"
                    color="primary"
                    className={styles.largeButton}
                >
                    Order Again
                </Button>
            </Box>
        </Box>
    );
}
export default CompleteOrderScreen