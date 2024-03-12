import React from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
} from "@mui/material";
import Rating from "@mui/material/Rating";
// import { FitScreen } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { displayMoney, generateDiscountedPrice } from "../DisplayMoney/DisplayMoney"
import { addItemToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    let discountPrice = generateDiscountedPrice(product.price);
    discountPrice = displayMoney(discountPrice);
    const oldPrice = displayMoney(product.price);

    const truncated =
        product.description
            .split(" ")
            .slice(0, 5)
            .join(" ") + "...";
    const nameTruncated = product.name.split(" ").slice(0, 3).join(" ") + "...";


    const addTocartHandler = (id, qty) => {
        dispatch(addItemToCart(id, qty))
    }


    return (
        <Card style={{
            width: "280px",
            height: "FitScreen",
            margin: "2rem",
            backgroundColor: "white",
            currsor: "pointer",
        }}>
            <Link
                className="productCard"
                to={`/product/${product._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <CardActionArea>
                    <CardMedia
                        // style={{
                        //     height: "200",
                        //     width: "90%",
                        //     objectFit: "cover",
                        //     margin: "1rem 1rem 0 1rem"
                        // }}
                        sx={{ height: 340 }}
                        image={product.images[0].url}
                        title="preview"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            color="black"
                            fontWeight="bold"
                            style={{ fontWeight: "700" }}
                        >
                            {nameTruncated}
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Rating
                                name="rating"
                                value={product.ratings}
                                precision={0.1}
                                readOnly
                                size="small"
                                style={{ color: "#ed1c24", marginRight: 8, fontWeight: "400" }}
                            />
                            <Typography variant="body2" color="textSecondary">
                                ({product.numOfReviews})
                            </Typography>
                        </Box>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="div"
                            style={{
                                fontSize: "0.8rem",
                                fontWeight: "500",
                                marginTop: "1rem",
                                marginBottom: "1rem",
                                display: "-webkit-box",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                            }}
                        >
                            {truncated}
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Typography variant="body1" style={{
                                textDecoration: "line-through",
                                fontWeight: "bold",
                                color: "rgba(0, 0, 0, 0.6)",
                                marginRight: "2rem",
                            }}>
                                {oldPrice}
                            </Typography>
                            <Typography variant="body1" style={{
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                            }}>
                                {discountPrice}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Link>
            <Box display="flex" justifyContent="center" p={2}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "4",
                        fontWeight: "bold",
                        width: "100%",
                        height: "45",
                        "&:hover": {
                            backgroundColor: "#ed1c24",
                            color: "black",
                            fontWeight: "bold",
                        },
                    }}
                    onClick={() => addTocartHandler(product._id, 1)}
                >
                    Add to Cart
                </Button>
            </Box>
        </Card >
    );
};

export default ProductCard;
