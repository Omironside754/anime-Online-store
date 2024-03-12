import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/icons-material";
import Highcharts from "highcharts";
import { ShoppingCart, AssignmentInd, People } from "@mui/icons-material";
import HighchartsReact from "highcharts-react-official";
import Highcharts3D from "highcharts/highcharts-3d";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProducts, clearErrors } from "../../actions/productAction";
import MetaData from "../Layouts/MetaData/MetaData";
import Loader from "../Layouts/loader/Loader";
// import { useAlert } from "react-alert";
import { getAllOrders } from "../../actions/orderAction";
import { getAllUsers, load_UserProfile } from "../../actions/userAction";
import Navbar from "./Navbar";
import Sidebar from "./Siderbar";
import { useNavigate } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ProductImg from "../../Image/admin/products.png";
import ordersImg from "../../Image/admin/order.png";
import usersImg from "../../Image/admin/user.png";
Highcharts3D(Highcharts);

const useStyles = {
  dashboard: {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    width: "100%",
    gap: "1rem",
    overflow: "hidden",
    margin: 0,
    padding: 0,
  },
  firstBox: {
    width: "20%",
    margin: "0rem",
    height: "fit-content",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    display: "block",
    '@media (minWidth: 999px)': {
      display: "none"
    }
  },

  toggleBox: {
    width: "16rem",
    margin: "0rem",
    height: "fit-content",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    display: "block",
    zIndex: "100",
    position: "absolute",
    top: "58px",
    left: "17px",
  },
  secondBox: {
    width: "75%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    '@media (maxWidth: 999px)': {
      width: "100%",
    },
  },
  navBar: {
    margin: "0rem",
  },
  summaryCard: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    width: "100%",
    height: "15rem",
    gap: "1rem",
    margin: "1rem 0 0 0",
    '@media (maxWidth: 600px)': { //sm
      flexDirection: "column",
      height: "20rem",
      alignItems: "center",
      marginTop: "7rem !important",
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#414141",
    margin: "0 1rem ",
    width: "30%",
    height: "10rem",

    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1) !important",
      backgroundColor: "#ed1c24 ",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, black) !important",
    },
    '@media (minWidth: 600px) and (maxWidth: 959px)': { //b/w sm and md
      width: "32% !important",
      marginBottom: "1rem !important",
      padding: "1rem 2rem ! important",
    },
    '@media (maxWidth: 600px)': {
      width: "85% !important",
      marginBottom: "1rem !important",
      padding: "2rem 2rem ! important",
    },
    '@media (maxWidth: 599.95px)': { //xs
      width: "85%",

      padding: "1.2rem",
      margin: "0   auto",
      marginBottom: "1rem",
      "&:hover": {
        transform: "scale(1.05) !important",
      },
    },
  },
  textContainer: {
    marginTop: "0.5rem",
    textAlign: "center",
    color: "white",
    textShadow: "1px 1px 2px black",
  },
  heading: {
    fontSize: "20px",
    fontWeight: 800,
    marginBottom: "0.5rem",
    textShadow: "1px 1px 2px black",
    '@media (maxWidth: 959.95px)': {//md
      fontSize: "18px",
    },
    '@media (maxWidth: 600px)': { //sm
      fontSize: "22px",
    },
  },
  number: {
    fontSize: "1.5rem",
    fontWeight: 500,
    textShadow: "1px 1px 2px black",
  },
  headerContent: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    color: "white",

    '@media (maxWidth: 959.95px)': {
      "& svg": {
        fontSize: "2rem",
      },
    },

    '@media (maxWidth: 600px)': {//sm
      "& svg": {
        fontSize: "3rem",
      },
    },
  },
  revenue: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "-2.5rem auto 0",
    '@media (maxWidth: 600px)': {
      flexDirection: "column",
      marginTop: "5rem !important",
    },
  },
  doughnutChart: {
    height: "fit-content",
    width: "42%",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    padding: "1rem 2rem",
    margin: "0 1rem",
    '@media (maxWidth: 959.95px)': {
      width: "30%",
      padding: "1rem 3rem",
      ".highcharts-background": {
        height: "350px !important",
      },
    },
    '@media (maxWidth: 600px)': {
      width: "85%",
      padding: "2rem",
      marginTop: "2rem",
    },

    '@media (maxWidth: 599.95px)': {
      width: "85%",
      marginBottom: "1rem",
      padding: "1.2rem",
    },
  },
  revnueContainer: {
    width: "42%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 1rem",
    height: "400px",
    backgroundColor: "black",
    borderRadius: "5px",
    padding: "1rem 2rem",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.3s",

    // '@media (maxWidth: 600px)': {
    //   width: "85% !important",
    //   padding: "1rem",
    //   height: "250px",
    // },

    '@media (maxWidth: 959.95px)': {
      width: "30%",
      padding: "1rem 3rem",
    },
    '@media (maxWidth: 600px)': {
      marginTop: "1rem",
      width: "85% !important",
      padding: "2rem !important",
      height: "250px",
    },

    '@media (maxWidth: 599.95px)': {
      width: "85%",
      marginBottom: "1rem",
      padding: "1rem !important",
    },
  },
  lineChart: {
    width: "90%",
    height: "fit-content",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
    padding: "2rem",
    margin: "1rem auto",

    '@media (maxWidth: 600px)': {
      width: "85%",
    },

    '@media (maxWidth: 599.95px)': {
      width: "85%",
      marginBottom: "1rem",
      padding: "1.2rem",
    },
  },
};

function Dashboard() {
  const classes = useStyles;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { products,
    loading,
    error } = useSelector((state) => state.products);
  const { orders, error: ordersError } = useSelector(
    (state) => state.allOrders
  );
  const { users, error: usersError } = useSelector((state) => state.allUsers);

  // const alert = useAlert();

  let OutOfStock = 0;
  products &&
    products.forEach((element) => {
      // check how much items out of stocks in products array
      if (element.stock === 0) {
        OutOfStock += 1;
      }
    });


  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors);
    }
    if (usersError) {
      // alert.error(usersError);
      dispatch(clearErrors);
    }
    if (ordersError) {
      // alert.error(ordersError);
      dispatch(clearErrors);
    }

    dispatch(getAllOrders());
    dispatch(getAllUsers());
    dispatch(getAdminProducts());
  }, [
    // dispatch,
    // error,
    //  alert,
    // ordersError,
    // usersError
  ]);

  // togle handler =>
  const toggleHandler = () => {
    console.log("toggle");
    setToggle(!toggle);
  };

  // total Amount Earned
  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  // chart js values for Line component
  const lineOptions = {
    chart: {
      type: "line",
      style: {
        fontFamily: "Roboto",
        fontWeight: "900",
      },
    },
    xAxis: {
      categories: ["Initial Amount", "Amount Earned"],
      labels: {
        style: {
          fontWeight: "900",
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        style: {
          fontWeight: "900",
        },
      },
    },
    series: [
      {
        name: "TOTAL AMOUNT",
        data: [0, totalAmount],
      },
    ],
    plotOptions: {
      line: {
        lineWidth: 4,
        marker: {
          enabled: true,
        },
        color: "black",
      },
    },
  };
  // now set the Value of stock of the product for Doughnut component in  chart .

  const doughnutOptions = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
      style: {
        fontFamily: "Roboto",
      },
    },
    title: {
      text: "Product Stock Status",
      align: "center",
      style: {
        color: "black",
        fontWeight: "900",
      },
    },

    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 35,
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            fontWeight: "500",
          },
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Share",
        data: [
          ["Out of Stock",
            products.length -
            OutOfStock],

          {
            name: "Out of Stock",
            y: OutOfStock,
            sliced: true,
            selected: true,
          },
        ],
      },
    ],
  };

  // to close the sidebar when the screen size is greater than 1000px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 999 && toggle) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggle]);



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Dashboard - Admin Panel" />
          <div style={classes.dashboard}>
            <div
              style={
                !toggle ? classes.firstBox : classes.toggleBox
              }
            >
              <Sidebar />
            </div>

            <div style={classes.secondBox}>

              <div style={classes.navBar}>
                <Navbar toggleHandler={toggleHandler} />
              </div>

              <div style={classes.summaryCard}>
                <div
                  style={{

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#414141",
                    margin: "0 1rem ",
                    width: "30%",
                    height: "10rem",

                    borderRadius: "5px",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.2s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1) !important",
                      backgroundColor: "#ed1c24 ",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, black) !important",
                    },
                    '@media (minWidth: 600px) and (maxWidth: 959px)': { //b/w sm and md
                      width: "32% !important",
                      marginBottom: "1rem !important",
                      padding: "1rem 2rem ! important",
                    },
                    '@media (maxWidth: 600px)': {
                      width: "85% !important",
                      marginBottom: "1rem !important",
                      padding: "2rem 2rem ! important",
                    },
                    '@media (maxWidth: 599.95px)': { //xs
                      width: "85%",

                      padding: "1.2rem",
                      margin: "0   auto",
                      marginBottom: "1rem",
                      "&:hover": {
                        transform: "scale(1.05) !important",
                      },
                    },

                    backgroundImage: `url(${ProductImg})`,
                    backgroundSize: "cover",
                    // transition: "transform 0.2s ease-in-out",
                    // cursor: "pointer",
                    ":hover": {
                      transform: "scale(1.1)",
                    },

                  }}
                  onClick={() => navigate("/admin/products")}
                >
                  <div style={classes.headerContent}>
                    <ShoppingCart
                      fontSize="large"
                      style={{
                        fontSize: "3rem",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
                      }}
                    />

                    <Typography variant="h6" style={classes.heading}>
                      Total Products
                    </Typography>
                  </div>
                  <div style={classes.textContainer}>
                    <Typography variant="body2" style={classes.number}>
                      {products && products.length}
                    </Typography>
                  </div>
                </div>

                <div

                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#414141",
                    margin: "0 1rem ",
                    width: "30%",
                    height: "10rem",

                    borderRadius: "5px",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.2s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1) !important",
                      backgroundColor: "#ed1c24 ",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, black) !important",
                    },
                    '@media (minWidth: 600px) and (maxWidth: 959px)': { //b/w sm and md
                      width: "32% !important",
                      marginBottom: "1rem !important",
                      padding: "1rem 2rem ! important",
                    },
                    '@media (maxWidth: 600px)': {
                      width: "85% !important",
                      marginBottom: "1rem !important",
                      padding: "2rem 2rem ! important",
                    },
                    '@media (maxWidth: 599.95px)': { //xs
                      width: "85%",

                      padding: "1.2rem",
                      margin: "0   auto",
                      marginBottom: "1rem",
                      "&:hover": {
                        transform: "scale(1.05) !important",
                      },
                    },

                    backgroundImage: `url(${ordersImg})`,
                    backgroundSize: "cover",
                    transition: "transform 0.2s ease-in-out",
                    cursor: "pointer",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                  onClick={() => navigate("/admin/orders")}
                >
                  <div style={classes.headerContent}>
                    <AssignmentInd
                      fontSize="large"
                      style={{
                        fontSize: "3rem",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="h6" style={classes.heading}>
                      Total Orders
                    </Typography>
                  </div>
                  <div style={classes.textContainer}>
                    <Typography variant="body2" style={classes.number}>
                      {orders && orders.length}
                    </Typography>
                  </div>
                </div>

                <div

                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#414141",
                    margin: "0 1rem ",
                    width: "30%",
                    height: "10rem",

                    borderRadius: "5px",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.2s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1) !important",
                      backgroundColor: "#ed1c24 ",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, black) !important",
                    },
                    '@media (minWidth: 600px) and (maxWidth: 959px)': { //b/w sm and md
                      width: "32% !important",
                      marginBottom: "1rem !important",
                      padding: "1rem 2rem ! important",
                    },
                    '@media (maxWidth: 600px)': {
                      width: "85% !important",
                      marginBottom: "1rem !important",
                      padding: "2rem 2rem ! important",
                    },
                    '@media (maxWidth: 599.95px)': { //xs
                      width: "85%",

                      padding: "1.2rem",
                      margin: "0   auto",
                      marginBottom: "1rem",
                      "&:hover": {
                        transform: "scale(1.05) !important",
                      },
                    },

                    backgroundImage: `url(${usersImg})`,
                    backgroundSize: "cover",
                    // transition: "transform 0.2s ease-in-out",
                    // cursor: "pointer",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                  onClick={() => navigate("/admin/users")}
                >
                  <div style={classes.headerContent}>
                    <People
                      fontSize="large"
                      style={{
                        fontSize: "3rem",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    <Typography variant="h6" style={classes.heading}>
                      Total Users
                    </Typography>
                  </div>
                  <div style={classes.textContainer}>
                    <Typography variant="body2" style={classes.number}>
                      {users && users.length}
                    </Typography>
                  </div>
                </div>
              </div>

              <div style={classes.revenue}>
                <div style={classes.doughnutChart}>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={doughnutOptions}
                  />
                </div>

                <div
                  // style={classes.revnueContainer}
                  style={{
                    width: "42%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 1rem",
                    height: "400px",
                    backgroundColor: "black",
                    borderRadius: "5px",
                    padding: "1rem 2rem",
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
                    transition: "background-color 0.3s",

                    // '@media (maxWidth: 600px)': {
                    //   width: "85% !important",
                    //   padding: "1rem",
                    //   height: "250px",
                    // },

                    '@media (maxWidth: 959.95px)': {
                      width: "30%",
                      padding: "1rem 3rem",
                    },
                    '@media (maxWidth: 600px)': {
                      marginTop: "1rem",
                      width: "85% !important",
                      padding: "2rem !important",
                      height: "250px",
                    },

                    '@media (maxWidth: 599.95px)': {
                      width: "85%",
                      marginBottom: "1rem",
                      padding: "1rem !important",
                    },

                    backgroundImage: `url(${ProductImg})`,
                    backgroundSize: "cover",
                    // transition: "transform 0.2s ease-in-out",
                    // borderRadius: "5px",

                    // width: "42%",
                  }}
                >
                  <div style={classes.headerContent}>
                    <BarChart
                      fontSize="large"
                      style={{
                        fontSize: "3rem",
                        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                    />

                    <Typography variant="h6" style={classes.heading}>
                      Total Revenue
                    </Typography>
                  </div>
                  <div style={classes.textContainer}>
                    <Typography variant="body2" style={classes.number}>
                      ₹{totalAmount.toFixed(2)}
                    </Typography>
                  </div>
                </div>
              </div>

              <div style={classes.lineChart}>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={lineOptions}
                />
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
