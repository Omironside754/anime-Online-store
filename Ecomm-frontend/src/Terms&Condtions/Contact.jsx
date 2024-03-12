import {
  Divider,
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
// import { useAlert } from "react-alert";
// import { useHistory } from "react-router-dom";
import MetaData from "../component/Layouts/MetaData/MetaData";



const ContactUs = () => {
  // const alert = useAlert();
  // const history = useHistory();
  const handleCall = () => {
    window.location.href = "tel:+8171280446";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert.success("Your message has been sent successfully");
    // history.push("/");
  };

  return (
    <Box style={{
      padding: "8rem 0",
      backgroundColor: "white",
      width: "100%",
      overflow: "hidden",
    }}>
      <MetaData title={"Contact Us"} />
      <div style={{
        width: "70%",
        margin: "0 auto",
      }}>
        <Typography variant="h2" style={{
          color: "#414141",
          fontSize: "1.5rem !important",
          padding: "1rem 3rem",
          // fontFamily: "Roboto",
          fontWeight: "700 !important",
          letterSpacing: "2px",
          // [theme.breakpoints.down("sm")]: {
          //   fontSize: "14px ",
          //   padding: "1rem 0",
          // },
        }}>
          Contact Us
        </Typography>

        <Divider style={{
          width: "90%",
          backgroundColor: "#b6b6b6",
          margin: "2rem 0 !important",
        }} />

        <Typography variant="h4" style={{
          fontSize: "18px",
          color: "black",
          padding: "2rem 0",
        }}>
          Need Help?
        </Typography>

        <Typography variant="body2" style={{
          paddingBottom: "3rem",
          marginLeft: "0.5rem",
          color: "#414141",
          lineHeight: "1.5rem",
          fontSize: "16px !important",
          width: "90%",
          letterSpacing: "2px",
          // [theme.breakpoints.down("sm")]: {
          //   width: "100%"
          // }
        }}>
          We have live chat available, look for the chat icon in the lower right
          hand corner of this page. If it isn’t there, then give us a call at{" "}
          <strong
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleCall}
          >
            8171280446
          </strong>
          .
        </Typography>

        <Typography variant="body2" style={{
          paddingBottom: "3rem",
          marginLeft: "0.5rem",
          color: "#414141",
          lineHeight: "1.5rem",
          fontSize: "16px !important",
          width: "90%",
          letterSpacing: "2px",
          // [theme.breakpoints.down("sm")]: {
          //   width: "100%"
          // }
        }}>
          <span
          //  className={classes.para2}
          >7:00-6:00 MST Monday-Friday</span>
          <br />
          <span
          // className={classes.para2}
          >9:00-4:00 MST Saturday</span>
          <br />
          <span
          // className={classes.para2}
          >Closed Sunday</span>
        </Typography>

        <Typography variant="body2" style={{
          paddingBottom: "3rem",
          marginLeft: "0.5rem",
          color: "#414141",
          lineHeight: "1.5rem",
          fontSize: "16px !important",
          width: "90%",
          letterSpacing: "2px",
          // [theme.breakpoints.down("sm")]: {
          //   width: "100%"
          // }
        }}>
          Catch us outside these hours? Fill out our support form below, and
          we'll be in touch shortly.
        </Typography>

        <Typography variant="body2" style={{
          paddingBottom: "3rem",
          marginLeft: "0.5rem",
          color: "#414141",
          lineHeight: "1.5rem",
          fontSize: "16px !important",
          width: "90%",
          letterSpacing: "2px",
        }}>
          <span style={{ fontWeight: "500", paddingBottom: "0.5rem" }}>
            Atrangi Store, Pvt Ltd.
          </span>
          <br />
          15130 Sec 22
          <br />
          Noida, UP 201301
          <br />
          India
        </Typography>

        <div style={{
          // "& > *": {
          //   margin: theme.spacing(2),
          // },
          // [theme.breakpoints.down("sm")]: {
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   gap: "1rem",
          // },
        }}>
          <a href="#issue-select" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={{
              backgroundColor: "#292929 !important",
              color: "white !important",
              width: "fit-content !important",
              padding: "0.8rem 2rem   !important",
              marginLeft: "3.3rem !important",
              borderRadius: "5px !important",
              "&:hover": {
                backgroundColor: "#ed1c24 !important",
                color: "white !important",
              },
              // [theme.breakpoints.down("sm")]: {
              //   marginLeft: "15px !important",
              // },
            }}>
              Support Form
            </Button>
          </a>

          <Button
            variant="contained"
            style={{
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
              // [theme.breakpoints.down("sm")]: {
              //   padding: "0.8rem 3.4rem   !important",
              // },
            }}
            onClick={handleCall}
          >
            Call Us
          </Button>
        </div>

        <Divider
        // className={classes.divider_contact} 
        />
        <div
        // className={classes.supportForm}
        >
          <Typography
            variant="h4"
            style={{
              color: "#414141",
              fontSize: "1.5rem !important",
              padding: "1rem 3rem",
              // fontFamily: "Roboto",
              fontWeight: "700 !important",
              letterSpacing: "2px",
              paddingBottom: "1rem",
              // [theme.breakpoints.down("sm")]: {
              //   fontSize: "14px ",
              //   padding: "1rem 0",
              // },
            }}
          >
            Support Form
          </Typography>

          <Typography variant="body2" style={{
            paddingBottom: "3rem",
            marginLeft: "0.5rem",
            color: "#414141",
            lineHeight: "1.5rem",
            fontSize: "16px !important",
            width: "90%",
            letterSpacing: "2px",
            // [theme.breakpoints.down("sm")]: {
            //   width: "100%"
            // }
          }}>
            Need a quicker answer? Look for our chat icon on the right hand side
            of this page.
          </Typography>

          <form
            style={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={handleSubmit}
          >
            <div style={{
              width: "100%",
              marginBottom: "2rem",
              "& .MuiOutlinedInput-root_contactus": {
                "& fieldset": {
                  borderColor: "#000",
                  borderRadius: "none !important",
                },
                "&:hover fieldset": {
                  borderColor: "#000",
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              },
              "& .MuiSelect-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
              "& .MuiSelect-icon": {
                color: "black",
              },
              "& .MuiList-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
            }}>
              <Typography variant="body2" style={{
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
                marginBottom: "1rem",
              }}>
                ISSUE *
              </Typography>
              <FormControl style={{
                // marginBottom: "2rem",
                width: "100%",
              }}>
                <Select
                  labelId="issue-label"
                  id="issue-select"
                  defaultValue="e-commerce"
                // MenuProps={{
                //   classes: { paper: classes.menu_contact },
                // }}
                >
                  <MenuItem value="e-commerce">E-Commerce</MenuItem>
                  <MenuItem value="app">App</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={{
              width: "100%",
              marginBottom: "2rem",
              "& .MuiOutlinedInput-root_contactus": {
                "& fieldset": {
                  borderColor: "#000",
                  borderRadius: "none !important",
                },
                "&:hover fieldset": {
                  borderColor: "#000",
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              },
              "& .MuiSelect-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
              "& .MuiSelect-icon": {
                color: "black",
              },
              "& .MuiList-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
            }}>
              <Typography variant="body2" style={{
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
                marginBottom: "1rem",
              }}>
                DETAIL *
              </Typography>
              <FormControl style={{
                // marginBottom: "2rem",
                width: "100%",
              }}>
                <Select
                  labelId="detail-label"
                  id="detail-select"
                  defaultValue="others"
                // MenuProps={{
                //   classes: { paper: classes.menu_contact },
                // }}
                >
                  <MenuItem value="availability">Availability</MenuItem>
                  <MenuItem value="return/exchange">Return/Exchange</MenuItem>
                  <MenuItem value="technical-support">
                    Technical Support
                  </MenuItem>
                  <MenuItem value="invoicing">Invoicing</MenuItem>
                  <MenuItem value="tracking-info">Tracking Info</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={{
              width: "100%",
              marginBottom: "2rem",
              "& .MuiOutlinedInput-root_contactus": {
                "& fieldset": {
                  borderColor: "#000",
                  borderRadius: "none !important",
                },
                "&:hover fieldset": {
                  borderColor: "#000",
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              },
              "& .MuiSelect-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
              "& .MuiSelect-icon": {
                color: "black",
              },
              "& .MuiList-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
            }}>
              <Typography variant="body2" style={{
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
                marginBottom: "1rem",
              }}>
                Language *
              </Typography>
              <FormControl style={{
                // marginBottom: "2rem",
                width: "100%",
              }}>
                <Select
                  labelId="language-label"
                  id="language-select"
                  defaultValue="english"
                // MenuProps={{
                //   classes: { paper: classes.menu_contact },
                // }}
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="hindi">Hindi</MenuItem>
                  <MenuItem value="japanese">Japanese</MenuItem>
                  <MenuItem value="chinese">Chinese</MenuItem>
                  <MenuItem value="german">German</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={{
              width: "100%",
              marginBottom: "2rem",
              "& .MuiOutlinedInput-root_contactus": {
                "& fieldset": {
                  borderColor: "#000",
                  borderRadius: "none !important",
                },
                "&:hover fieldset": {
                  borderColor: "#000",
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              },
              "& .MuiSelect-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
              "& .MuiSelect-icon": {
                color: "black",
              },
              "& .MuiList-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
            }}>
              <Typography variant="body2" style={{
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
                marginBottom: "1rem",
              }}>
                {" "}
                EMAIL *
              </Typography>
              <FormControl style={{
                // marginBottom: "2rem",
                width: "100%",
              }}>
                <TextField
                  placeholder="Enter Your Email *"
                  id="email-input"
                  type="email"
                />
              </FormControl>
            </div>

            <div style={{
              width: "100%",
              marginBottom: "2rem",
              "& .MuiOutlinedInput-root_contactus": {
                "& fieldset": {
                  borderColor: "#000",
                  borderRadius: "none !important",
                },
                "&:hover fieldset": {
                  borderColor: "#000",
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
              },
              "& .MuiSelect-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
              "& .MuiSelect-icon": {
                color: "black",
              },
              "& .MuiList-root_contactus": {
                backgroundColor: "white",
                color: "black",
              },
            }}>
              <Typography variant="body2" style={{
                color: "#000",
                fontSize: "1rem",
                fontWeight: "500",
                marginBottom: "1rem",
              }}>
                {" "}
                MESSAGE *
              </Typography>
              <FormControl style={{
                // marginBottom: "2rem",
                width: "100%",
              }}>
                <TextField
                  id="message-textarea"
                  multiline
                  rows={6}
                  variant="outlined"
                  placeholder="Enter Your Message *"
                />
              </FormControl>
            </div>
            <Button
              type="submit"
              variant="contained"
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#292929 !important",
                color: "white   !important",
                width: "fit-content     !important",
                padding: "1rem 3rem   !important",
                borderRadius: "5px !important",
                "&:hover": {
                  backgroundColor: "#ed1c24 !important",
                  color: "white !important",
                },
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default ContactUs;
