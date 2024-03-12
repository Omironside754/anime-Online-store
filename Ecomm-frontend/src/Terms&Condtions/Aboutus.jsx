import { Typography, Container, Grid, Button } from "@mui/material";
import MetaData from "../component/Layouts/MetaData/MetaData"
import TermsImage from "../Image/about/tc.jpg";
import { Link } from "react-router-dom";



const AboutUs = () => {

  return (
    <>
      <div style={{
        paddingTop: "8rem",
        paddingBottom: "4rem",
        backgroundColor: "white !important",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <MetaData title={"About Us"} />
        <Container style={{
          padding: "2rem",
          textAlign: "center",

          backgroundColor: "white !important",
          maxWidth: "100%",
        }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="Atrangi"
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "3rem",
                  marginBottom: "2rem",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                style={{
                  color: "#414141",
                  fontSize: "30px",
                  padding: "2rem 1rem 2rem",
                  // fontFamily: "Roboto",
                  fontWeight: "800 !important",
                }}
              >
                About Us
              </Typography>
              <Typography variant="body1" style={{
                maxWidth: "800px",

                lineHeight: "1.5",
                margin: "1.5rem 0",
                color: "#292929",
                fontSize: "1.2rem",
                fontWeight: "400 !important",
                textAlign: "justify",
                padding: "0.8rem 1rem",
              }}>
                Welcome to Atrangi, where fashion meets individuality in the most vibrant and eclectic way possible. We're not just a clothing brand; we're a celebration of uniqueness, a nod to the wonderfully diverse tapestry of styles that make up our world.


              </Typography>
              <Typography variant="body1" style={{
                maxWidth: "800px",

                lineHeight: "1.5",
                margin: "1.5rem 0",
                color: "#292929",
                fontSize: "1.2rem",
                fontWeight: "400 !important",
                textAlign: "justify",
                padding: "0.8rem 1rem",
              }}>
                At Atrangi, we believe that fashion is more than just clothing; it's a form of self-expression, a canvas upon which you paint your personality. That's why our collections are as diverse as our clientele, ranging from bold and vibrant prints to elegant and understated designs. Whether you're a trendsetter or a trend-breaker, there's something for everyone in our carefully curated selection.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container style={{
          padding: "2rem",
          textAlign: "center",

          backgroundColor: "white !important",
          maxWidth: "100%",
        }}>
          <Typography
            variant="h3"
            component="h1"
            style={{
              fontSize: "30px",
              padding: "2rem 1rem 2rem",
              fontWeight: "800 !important",
              color: "#414141",
              textAlign: "center",
            }}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" style={{
            lineHeight: "1.5",
            margin: "2rem 0",
            color: "#292929",
            fontSize: "1rem",
            fontWeight: "400 !important",
            textAlign: "justify",
            padding: "0.8rem 1rem",
          }}>
            Our journey began with a simple idea: to create clothing that makes you feel as good as you look. From our humble beginnings, we've grown into a global brand, beloved by fashion-forward individuals from all walks of life. Yet, amidst our success, we remain true to our roots, always striving to push the boundaries of creativity and innovation.


          </Typography>
          <Typography variant="body1" style={{
            lineHeight: "1.5",
            margin: "2rem 0",
            color: "#292929",
            fontSize: "1rem",
            fontWeight: "400 !important",
            textAlign: "justify",
            padding: "0.8rem 1rem",
          }}>
            But Atrangi is more than just a brand; it's a community. We're a family of like-minded individuals united by our love for fashion and our belief in the power of self-expression. Whether you're shopping online or visiting one of our stores, you'll always be greeted with a warm smile and a helping hand.
            So come, join us on this journey of self-discovery and style. Together, let's embrace the Atrangi in all of us.


          </Typography>
          <Typography variant="body1" style={{
            lineHeight: "1.5",
            margin: "2rem 0",
            color: "#292929",
            fontSize: "1rem",
            fontWeight: "400 !important",
            textAlign: "justify",
            padding: "0.8rem 1rem",
          }}>
            At Atrangi, we believe in fostering long-term relationships
            with our customers. We provide excellent customer service and strive
            to exceed expectations at every step. We are committed to delivering
            a seamless online shopping experience and ensuring customer
            satisfaction. Join us on this exciting journey as we continue to
            grow and expand our reach in the world of cricket.
          </Typography>
        </Container>
        <Container style={{
          padding: "2rem",
          textAlign: "center",

          backgroundColor: "white !important",
          maxWidth: "100%",
        }}>
          <Typography
            variant="h3"
            component="h1"
            style={{
              fontSize: "30px",
              padding: "2rem 1rem 2rem",
              fontWeight: "800 !important",
              color: "#414141",
              textAlign: "center",
            }}          >
            Our Mission
          </Typography>
          <Typography variant="body1" style={{
            lineHeight: "1.5",
            margin: "2rem 0",
            color: "#292929",
            fontSize: "1rem",
            fontWeight: "400 !important",
            textAlign: "justify",
            padding: "0.8rem 1rem",
          }}>
            At Atrangi, our commitment goes beyond just creating beautiful clothing; we're dedicated to making a positive impact on the world around us. That's why we prioritize sustainability and ethical practices in everything we do, from sourcing materials to manufacturing our garments. We believe that fashion should never come at the expense of the planet or its people, and we're constantly striving to minimize our environmental footprint and support fair labor practices.


          </Typography>
          <Typography variant="body1" style={{
            lineHeight: "1.5",
            margin: "2rem 0",
            color: "#292929",
            fontSize: "1rem",
            fontWeight: "400 !important",
            textAlign: "justify",
            padding: "0.8rem 1rem",
          }}>
            But our impact extends far beyond the fashion industry. Through partnerships with charitable organizations and community initiatives, we're using our platform to drive positive change and make a difference in the lives of others. Whether it's supporting local artisans or donating a portion of our proceeds to worthy causes, we're committed to using our influence for good.


          </Typography>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem 0",
            width: "100%",
            marginTop: "1rem",
          }}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" style={{
                backgroundColor: "#000000 !important",
                color: "white !important",
                width: "fit-content !important",
                padding: "0.8rem 2rem   !important",
                marginLeft: "3.3rem !important",
                borderRadius: "5px !important",
                "&:hover": {
                  backgroundColor: "#ed1c24 !important",
                  color: "white !important",
                },
              }}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" style={{
                backgroundColor: "#292929 !important",
                color: "white   !important",
                width: "fit-content     !important",
                padding: "0.8rem 2rem   !important",
                marginLeft: "1.3rem !important",
                borderRadius: "5px !important",
                "&:hover": {
                  backgroundColor: "#ed1c24 !important",
                  color: "white !important",
                },
              }}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
