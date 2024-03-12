import Login from "./component/User/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./component/User/SignUp";
import ForgotPassword from "./component/User/ForgetPassword";
import Home from "./component/Home/Home";
import Header from "./component/Layouts/Header1.jsx/Header";
import AboutUs from "./Terms&Condtions/Aboutus";
import ContactUs from "./Terms&Condtions/Contact";
import Footer from "./component/Layouts/Footer/Footer";
import TermsAndConditions from "./Terms&Condtions/TermsAndUse";
import Services from "./Terms&Condtions/Service";
import PrivacyPolicy from "./Terms&Condtions/Privacy";
import ReturnPolicyPage from "./Terms&Condtions/Return";
import ProfilePage from "./component/User/Profile";

import "./App.css";
import Cart from "./component/Cart/Cart";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
// import Route from "./component/Route/Route";
import { useEffect } from "react";
// const LazyPayment = lazy(() => import("./component/Cart/Payment"));
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import OrderList from "./component/Admin/OrderList";
import UserList from "./component/Admin/UserList";
import UpdateProduct from "./component/Admin/UpdateProduct";
import ProcessOrder from "./component/Admin/ProcessOrder";
// import UpdateProduct from "./component/Admin/UpdateProduct";
import NewProduct from "./component/Admin/NewProduct";
import ProductReviews from "./component/Admin/ProductReviews";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ResetPassword from "./component/User/ResetPassword";
import MyOrder from "./component/order/MyOrder";
import { useDispatch } from "react-redux";
import { load_UserProfile } from "./actions/userAction";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Shipping from "./component/Cart/Shipping";
import OrderSuccess from "./component/Cart/OrderSuccess";
import Activator from "./component/Route/Activator";

// const LazyProductReviews = lazy(() =>
//   import("./component/Admin/ProductReviews")
// );
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_UserProfile());
  }, []);
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route
            exact path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            } />

          <Route
            exact
            path="/login"
            element={
              <>
                <Header />
                <Login />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/signup"
            element={
              <>
                <Header />
                <SignUp />
                <Footer />
              </>
            }
          />
          <Route
            exact path="/password/forgot"
            element={
              <>
                <Header />
                <ForgotPassword />
                <Footer />
              </>
            } />

          <Route
            exact
            path="/profile/update"
            element={
              <>
                {<Header />}
                {/* <PrivateRoute
                  exact
                  path="/profile/update"
                  component={UpdateProfile}
                /> */}
                <UpdateProfile />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/password/update"
            element={
              <>
                {<Header />}
                {/* <PrivateRoute
                  exact
                  path="/password/update"
                  component={UpdatePassword}
                /> */}
                <UpdatePassword />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/password/reset/:token"
            element={
              <>
                {<Header />}
                <ResetPassword />
                <Services />
                {<Footer />}
              </>
            }
          />


          <Route
            exact
            path="/cart"
            element={
              <>
                {<Header />}
                <Cart />
                <Services />
                {<Footer />}
              </>
            }
          />


          <Route
            exact
            path="/product/:id"
            element={
              <>
                {<Header />}
                <ProductDetails />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/products"
            element={
              <>
                {<Header />}
                <Products />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            path="/products/:keyword"
            element={
              <>
                <Header />
                <Products />
                <Services />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/about_us"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/contact"
            element={
              <>
                <Header />
                <ContactUs />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/policy/return"
            element={
              <>
                <Header />
                <ReturnPolicyPage />
                <Services />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/policy/Terms"
            element={
              <>
                {<Header />}
                <TermsAndConditions />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/policy/privacy"
            element={
              <>
                {<Header />}
                <PrivacyPolicy />
                <Services />
                {<Footer />}
              </>
            }
          />

          <Route
            exact
            path="/terms/conditions"
            element={
              <>
                {<Header />}
                <TermsAndConditions />
                <Services />
                {<Footer />}
              </>
            }
          />
          <Route
            exact
            path="/orders"
            render={() => (
              <>
                {<Header />}
                <MyOrder />
                {/* <PrivateRoute exact path="/orders" component={MyOrder} /> */}
                <Services />
                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/shipping"
            render={() => (
              <>
                {<Header />}
                <Shipping />
                {/* <PrivateRoute exact path="/shipping" component={Shipping} /> */}
                <Services />
                {<Footer />}
              </>
            )}
          />

          <Route
            exact
            path="/order/confirm"
            render={
              <>
                {<Header />}
                <ConfirmOrder />
                {/* <PrivateRoute
                  exact
                  path="/order/confirm"
                  component={ConfirmOrder}
                /> */}
                <Services />
                {<Footer />}
              </>
            }
          />
          <Route
            exact
            path="/success"
            render={() => (
              <>
                {<Header />}
                <OrderSuccess />
                {/* <PrivateRoute exact path="/success" component={OrderSuccess} /> */}
                <Services />
                {<Footer />}
              </>
            )}
          />




          {/* private Routes */}

          <Route

            exact
            path="/admin/dashboard"
            element={<>


              <Activator />

              <Dashboard />

            </>

            }
          />

          <Route

            exact
            path="/admin/products"
            element={
              <>
                <Activator />
                <ProductList />

              </>
            }
          />
          <Route

            exact
            path="/admin/product/:id"
            element={<UpdateProduct />}
          />
          <Route

            exact
            path="/admin/reviews"
            element={<ProductReviews />}
          />
          <Route

            exact
            path="/admin/orders"
            element={<OrderList />}
          />
          <Route

            exact
            path="/admin/order/:id"
            element={<ProcessOrder />}
          />
          <Route
            exact
            path="/orders"
            element={
              <>
                <Header />
                <Activator />
                <MyOrder />
                <Services />
                <Footer />
              </>
            }
          />
          <Route

            exact
            path="/admin/new/product"
            element={
              <>
                <Activator />
                <NewProduct />
              </>
            }
          />
          <Route

            exact
            path="/admin/users"
            element={<UserList />}
          />

          <Route
            exact
            path="/account"
            element={
              <>
                {<Header />}
                {/* <Route exact path="/account" element={Profile} /> */}
                <ProfilePage />
                <Services />
                {<Footer />}
              </>
            }
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
