import React, { useState, useEffect } from "react";
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
    Grid,
    Avatar,
} from "@mui/material";
import "./LoginFormStyle.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login, clearErrors } from "../../actions/userAction";
// import CricketBallLoader from "../Layouts/loader/Loader";
// import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
// import MetaData from "../Layouts/MetaData/MetaData";
import { LockOpen } from "@mui/icons-material";

function Login() {

    const navigate = useNavigate();

    const location = useLocation();
    // const history = useHistory();

    const dispatch = useDispatch();
    // const alert = useAlert();

    const { isAuthenticated, loading, error } = useSelector(
        (state) => state.userData
    );

    // const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValidEmail(
            newEmail !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
        );
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    };


    const isSignInDisabled = !(email && password && isValidEmail);


    const redirect = location.search
        ? location.search.split("=")[1]
        : "/account";
    useEffect(() => {
        if (error) {
            // alert.error(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            // history.push(redirect);
            navigate(redirect);
        }
    }, [dispatch, isAuthenticated, loading, error, alert,
        navigate,
        redirect
    ]);

    function handleLoginSubmit(e) {
        e.preventDefault();
        dispatch(login(email, password));
    }


    return (
        <>
            <div className="formContainer">
                <form className="form">
                    <Avatar className="avatar">
                        <LockOpen />
                    </Avatar>
                    <Typography variant="h5" component="h1" style={{
                        textAlign: "center",
                        marginBottom: "50px",
                        color: "#414141",
                        fontWeight: "bold",
                    }} >
                        Sign in to Your Account
                    </Typography>

                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        className="emailInput textField"
                        value={email}
                        onChange={handleEmailChange}
                        error={!isValidEmail && email !== ""}
                        helperText={
                            !isValidEmail && email !== ""
                                ? "Please enter a valid email address."
                                : ""
                        }
                    />


                    <TextField
                        label="Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        className="passwordInput textField"
                        InputProps={{
                            endAdornment: (
                                <Button
                                    variant="outlined"
                                    className="showPasswordButton"
                                    onClick={handleShowPasswordClick}
                                >
                                    {showPassword ? <VisibilityOff color="disabled"/> : <Visibility color="primary"/>}
                                </Button>
                            ),
                        }}
                        value={password}
                        onChange={handlePasswordChange}
                    />

                    <Grid container className="rememberMeContainer">
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Remember me"
                            />
                        </Grid>
                        <Grid item>
                            <Link
                                to="/password/forgot"
                                className="forgotPasswordLink"
                            >
                                Forgot your password?
                            </Link>
                        </Grid>
                    </Grid>

                    <Typography
                        variant="body2"
                        className="termsAndConditionsText"
                    >
                        I accept the terms and conditions
                        <Link to="/policy/privacy" className="privacyText">
                            Privacy Policy.
                        </Link>
                    </Typography>

                    <Button
                        variant="contained"
                        className="loginButton"
                        fullWidth
                        disabled={isSignInDisabled}
                        onClick={handleLoginSubmit}
                    >
                        Sign in
                    </Button>

                    <Typography
                        variant="body1"
                        align="center"
                        style={{ marginTop: "1rem" }}
                    >
                        Don't have an account?
                        <Link to="/signup" className="createAccount">
                            Create Account
                        </Link>
                    </Typography>
                </form>
            </div>
        </>
    )
}

export default Login;