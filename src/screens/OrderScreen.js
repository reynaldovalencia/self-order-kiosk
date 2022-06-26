import { Alert, Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Dialog, DialogTitle, Grid, List, ListItem, TextField, Typography } from "@mui/material"
import { useContext, useState } from "react";
import { useEffect } from "react";
import { listCategories, listProducts, addToOrder, removeFromOrder } from "../actions";
import Logo from "../components/Logo";
import { Store } from "../store";
import { useStyles } from "../styles";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'

const OrderScreen = () => {
    const styles = useStyles();
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState("");
    const [isOpen, setIsOpen] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});

    const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList;
    const { products, loading: loadingProducts, error: errorProducts } = state.productList;

    const {
        orderItems,
        itemsCount,
        totalPrice,
        taxPrice,
        orderType,
    } = state.order;

    useEffect(() => {
        if (!categories) {
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName)
        }
    }, [dispatch, categories, categoryName]);


    const categoryClickHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName);
    }

    const closeHandler = () => {
        setIsOpen(false);
    }

    const productClickHandler = (p) => {
        setProduct(p);
        setIsOpen(true);
    }

    const addToOrderHandler = () => {
        addToOrder(dispatch, { ...product, quantity });
        setIsOpen(false)
    }

    const cancelOrRemoveFromOrder = () => {
        removeFromOrder(dispatch, product);
        setIsOpen(false);
    };

    const clearOrder = () => {

    }

    const previewOrderHandler = () => {
        navigate("/review");
    }



    return (
        <Box className={styles.root}>
            {/* Modal to change quantities */}
            <Dialog
                maxWidth="sm"
                fullWidth={true}
                open={isOpen}
                onClose={closeHandler}
            >
                <DialogTitle className={styles.center}>
                    Add {product.name}
                </DialogTitle>
                <Box className={[styles.row, styles.center]}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={quantity === 1}
                        onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
                    >
                        <RemoveIcon />
                    </Button>
                    <TextField
                        inputProps={{ className: styles.largeInput }}
                        InputProps={{
                            bar: true,
                            inputProps: {
                                className: styles.largeInput,
                            },
                        }}
                        className={styles.largeNumber}
                        type="number"
                        variant="filled"
                        min={1}
                        value={quantity}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => setQuantity(quantity + 1)}
                    >
                        <AddIcon />
                    </Button>
                </Box>
                <Box className={[styles.row, styles.around]}>
                    <Button
                        onClick={cancelOrRemoveFromOrder}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={styles.largeButton}
                    >
                        {orderItems.find((x) => x.name === product.name)
                            ? 'Remove From Order'
                            : 'Cancel'}
                    </Button>

                    <Button
                        onClick={addToOrderHandler}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={styles.largeButton}
                    >
                        ADD To Order
                    </Button>
                </Box>
            </Dialog>
            {/* Show Categories in Sidebar */}
            <Box className={styles.main}>
                <Grid container>
                    <Grid item md={2}>
                        <List>
                            {loading ? (
                                <CircularProgress />
                            ) : error ? (
                                <Alert severity="error">{error}</Alert>
                            ) : (
                                <>
                                    <ListItem onClick={() => categoryClickHandler('')} button>
                                        <Logo ></Logo>
                                    </ListItem>
                                    {categories.map((category) => (
                                        <ListItem
                                            button
                                            key={category.name}
                                            onClick={() => categoryClickHandler(category.name)}
                                        >
                                            <Avatar src={category.image} alt={category.name} />
                                        </ListItem>
                                    ))}
                                </>
                            )}

                        </List>
                    </Grid>
                    {/* Show Products */}
                    <Grid item md={10}>
                        <Typography
                            gutterBottom
                            className={styles.title}
                            variant="h2"
                            component="h2"
                        >
                            {categoryName || "Main Menu"}
                        </Typography>
                        <Grid container spacing={1}>
                            {loadingProducts ? (
                                <CircularProgress />
                            ) : errorProducts ? (
                                <Alert severity="error">{errorProducts}</Alert>
                            ) : (
                                products.map((product, id) => (
                                    <Grid item md={6} key={id}>
                                        <Card className={styles.card} onClick={() => productClickHandler(product)}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt={product.name}
                                                    image={product.image}
                                                    className={styles.media}
                                                />
                                            </CardActionArea>
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    color="textPrimary"
                                                    component="p"
                                                >
                                                    {product.name}
                                                </Typography>
                                                <Box className={styles.cardFooter}>
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                        component="p"
                                                    >
                                                        {product.calorie} Cal
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="textPrimary"
                                                        component="p"
                                                    >
                                                        $ {product.price}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box>
                    <Box className={[styles.bordered, styles.space]}>
                        My Order - {orderType} | Tax: ${taxPrice} | Total: ${totalPrice} |
                        Items: {itemsCount}
                    </Box>
                    <Box className={[styles.row, styles.around]}>
                        <Button
                            onClick={() => {
                                clearOrder(dispatch);
                                navigate("/");
                            }}
                            variant="contained"
                            color="primary"
                            className={styles.largeButton}
                        >
                            Cancel Order
                        </Button>
                        <Button
                            onClick={previewOrderHandler}
                            variant="contained"
                            color="primary"
                            disabled={orderItems.length === 0}
                            className={styles.largeButton}
                        >
                            Done
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default OrderScreen