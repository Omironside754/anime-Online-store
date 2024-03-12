import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearErrors } from "../../actions/userAction";
// import { useAlert } from "react-alert";
import MetaData from "../Layouts/MetaData/MetaData";
// import { useHistory, useRouteMatch } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CricketBallLoader from "../Layouts/loader/Loader";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import "./LoginFormStyle.css";
import Visibility from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { VisibilityOff } from "@mui/icons-material";


function ResetPassword() {


  // const match = useRouteMatch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const alert = useAlert();

  const { error, success, loading } = useSelector(
    (state) => state.forgetPassword
  );




  // const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsValidPassword(event.target.value.length >= 8);
  };
  const handleConfirmPasswordChange = (event) => {
    setconfirmPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {

    setShowPassword(!showPassword);

  };



  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Password Updated Successfully");
      navigate("/login");
    }
  }, [dispatch, error, alert, success, navigate]);


  // submit handler
  function resetPasswordSubmitHandler(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      // alert.error("Password and Confirm Password do not match");
      return;
    }
    const myForm = new FormData();
    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    // dispatch(resetPassword(match.params.token, myForm));

  }


  const isSignInDisabled = !(password && confirmPassword && isValidPassword);

  return (
    <>
      <MetaData title="Reset Password" />
      {loading ? (
        <CricketBallLoader />
      ) : (
    <div className={"formContainer"}>
      <form className={"form"}>
        <Avatar className={"avatar"}>
          <LockResetIcon />
        </Avatar>
        <Typography variant="h5" component="h1" className={"heading"}>
          Reset Password
        </Typography>

        <TextField
          style={{ marginTop: "1rem" }}
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          className={`${"passwordInput"} ${"textField"}`}
          error={!isValidPassword && password !== ""}
          helperText={
            !isValidPassword && password !== ""
              ? "Password must be at least 8 characters."
              : ""
          }
          InputProps={{
            endAdornment: (
              <Button
                variant="outlined"
                className={"showPasswordButton"}
                onClick={handleShowPasswordClick}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </Button>
            ),
          }}
          value={password}
          onChange={handlePasswordChange}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          className={`${"passwordInput"} ${"textField"}`}
          InputProps={{
            endAdornment: (
              <Button
                variant="outlined"
                className={"showPasswordButton"}
                onClick={handleShowPasswordClick}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </Button>
            ),
          }}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <Button
          variant="contained"
          className={"loginButton"}
          fullWidth
          disabled={isSignInDisabled}
          style={{ marginTop: "3.5rem" }}
          onClick={resetPasswordSubmitHandler}

        >
          Confirm New Password
        </Button>
        <Typography
          variant="body1"
          align="center"
          style={{ marginTop: ".5rem" }}
        >
          <Link to="/login" className={"createAccount"}>
            Cancel
          </Link>
        </Typography>
      </form>
    </div>
      )}
    </>
  );
}

export default ResetPassword;
