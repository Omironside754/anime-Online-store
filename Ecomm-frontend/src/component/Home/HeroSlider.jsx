import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const slides = [
    {
        image: require("../../Image/Cricket-wepon/2.jpg"),
        quote:
            "Unleash Your Passion for Cricket and Embrace the Thrill of the Game",
        saleText:
            "Get in the game with up to 50% off on a wide range of cricket gear's",
        productText: "Shop Now",
    },
    {
        image: require("../../Image/Cricket-wepon/3.jpg"),
        quote:
            "Experience the Unparalleled Excitement and Achieve Victory with Our Premium Cricket Equipment",
        saleText:
            "Limited Time Offer: Don't miss out on the opportunity to upgrade your game",
        productText: "Buy Now",
    },
    {
        image: require("../../Image/Cricket-wepon/1.jpg"),
        quote:
            "Gear up with the Latest Innovations and Dominate the Field like Never Before",
        saleText: "Discover New Arrivals and stay ahead of the competition",
        productText: "Explore",
    },
    {
        image: require("../../Image/Cricket-wepon/4.jpg"),
        quote:
            "Elevate Your Performance and Unleash Your True Cricketing Potential with Our Cutting-Edge Gear",
        saleText: "New Arrivals: Enhance your skills and excel on the field",
        productText: "Upgrade Now",
    },
];

export default function HeroSlider() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % slides.length);
    };

    const handleBack = () => {
        setActiveStep(
            (prevActiveStep) => (prevActiveStep - 1 + slides.length) % slides.length
        );
    };

    return (
        <>
            <Carousel
                autoPlay={true}
                navButtonsAlwaysVisible
                indicators={false}
                animation="slide"
                interval={5000}
                timeout={500}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: "#00000088",
                        borderRadius: 0,
                        padding: 0,
                        margin: 0,
                        height: "100%",
                    },
                }}
                prevButton={
                    <Button
                        className="slider-nav-btn prev"
                        onClick={handleBack}
                        startIcon={<ArrowBackIosIcon />}
                    ></Button>
                }
                nextButton={
                    <Button
                        className="slider-nav-btn next"
                        onClick={handleNext}
                        endIcon={<ArrowForwardIosIcon />}
                    ></Button>
                }
                fullHeightHover={false}
                style={{
                    height: "calc(100vh - 64px)",
                    width: "100%",
                    position: "relative"
                    // [theme.breakpoints.down("sm")]: {
                    //     // // height: "50vh",
                    //     // marginTop : "5rem",
                    // },
                }}
                index={activeStep}
                onChangeIndex={setActiveStep}
            >
                {slides.map((slide, index) => (
                    <div key={index} style={{
                        height: "calc(100vh - 64px)",
                        width: "100%",
                        position: "relative"
                        // [theme.breakpoints.down("sm")]: {
                        //     // // height: "50vh",
                        //     // marginTop : "5rem",
                        // },
                    }}>
                        <img
                            src={slide.image}
                            alt="slider"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "10%",
                            transform: "translateY(-50%)",
                            textAlign: "left",
                            color: "#fff",
                            zIndex: "1"
                            // [theme.breakpoints.down("sm")]: {
                            //     left: "50%",
                            //     transform: "translate(-50%, -50%)",
                            // },
                        }}>
                            <h2 style={{
                                fontSize: "16px",
                                width: "30vw",
                                fontWeight: "500",
                                marginBottom: "1rem"
                                // [theme.breakpoints.down("sm")]: {
                                //     fontSize: "14px",
                                //     width: "80vw",
                                // },
                                // [theme.breakpoints.down("xs")]: {
                                //     fontSize: "12px",
                                //     width: "90vw",
                                // },
                            }}>{slide.quote}</h2>
                            <h3 style={{
                                fontSize: "32px",
                                fontFamily: "Roboto",
                                fontWeight: "800",
                                width: "45vw",
                                marginBottom: "1rem"
                                // [theme.breakpoints.down("sm")]: {
                                //     fontSize: "24px",
                                //     width: "80vw",
                                // },
                                // [theme.breakpoints.down("xs")]: {
                                //     fontSize: "20px",
                                //     width: "90vw",
                                // },
                            }}>{slide.saleText}</h3>
                            <Link to="/products">
                                <Button style={{
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    border: `1px solid`,
                                    borderRadius: "1px",
                                    padding: "3rem",
                                    transition: "background-color 0.3s ease-in-out",
                                    // "&:hover": {
                                    // backgroundColor: theme.palette.common.white,
                                    // color: "#000", }
                                    // [theme.breakpoints.down("sm")]: {
                                    //     fontSize: "16px",
                                    //     padding: theme.spacing(0.5, 2),
                                    // },
                                    // [theme.breakpoints.down("xs")]: {
                                    //     fontSize: "14px",
                                    //     padding: theme.spacing(0.5, 1.5),
                                    // },
                                }}>
                                    {slide.productText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Carousel >
        </>
    );
}
