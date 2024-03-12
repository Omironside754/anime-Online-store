import { LockClock } from "@mui/icons-material";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function ForgotPassword() {

    const dispatch = useDispatch();
    // const alert = useAlert();
    const { error, message, loading } = useSelector(
        (state) => state.forgetPassword
    );

    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isDone, setIsDone] = useState(false);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValidEmail(
            newEmail !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
        );
    };

    function handleforgotPasswordSubmit(e) {
        e.preventDefault();
        setIsDone(!isDone);

        const myForm = new FormData();
        myForm.set("email", email);
        // dispatch(forgetPassword(myForm));

    }



    // useEffect(() => {
    //     if (error) {
    //         alert.error(error);
    //         dispatch(clearErrors());
    //     }

    //     if (message) {
    //         alert.success(message);
    //         setEmail("");
    //     }
    // }, [dispatch, error, alert, message, loading]);

    const isSignInDisabled = !(email && isValidEmail);

    return (
        <>
            <div className="formContainer">
                <form className="form" onSubmit={handleforgotPasswordSubmit}>
                    <Avatar className="avatar">
                        <LockClock />
                    </Avatar>
                    <Typography variant="h5" component="h1" style={{
                        textAlign: "center",
                        marginBottom: "50px",
                        color: "#414141",
                        fontWeight: "bold",
                    }} >
                        Forgot your password?
                    </Typography>

                    {isDone && (
                        <Typography
                            variant="body1"
                            align="center"
                            style={{ color: "#007500" }}
                        >
                            An email regarding your password change has been sent to your
                            email address.
                        </Typography>
                    )}

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

                    <Button
                        variant="contained"
                        className="loginButton"
                        fullWidth
                        disabled={isSignInDisabled}
                        style={{ marginTop: "3rem" }}
                        onClick={handleforgotPasswordSubmit}
                    >
                        Send email
                    </Button>
                    <Typography
                        variant="body1"
                        align="center"
                        style={{ marginTop: ".3rem" }}
                    >
                        <Link to="/login" className="createAccount">
                            Cancel
                        </Link>
                    </Typography>
                </form>
            </div>
        </>
    )
}
export default ForgotPassword;