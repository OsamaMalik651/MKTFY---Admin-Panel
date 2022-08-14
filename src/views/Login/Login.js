import React, { useEffect, useState } from 'react'
import { AuthContext } from 'context/authContext'
import { useContext } from 'react';
import RoundedButton from 'components/RoundedButton/RoundedButton';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import styles from "assets/jss/material-dashboard-react/views/loginStyle"
import logo from "assets/img/logo.svg"
import { Link } from 'react-router-dom';
import Snackbar from 'components/Snackbar/Snackbar';


const useStyles = makeStyles(styles)

const Login = () => {
    const classes = useStyles()
    const { authenticated, login, error, setError, showError, setShowError } = useContext(AuthContext);

    //Component State
    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmailInput, setValidEmailInput] = useState(false);
    const [showEmailErrorText, setShowEmailErrorText] = useState(false)

    useEffect(() => {
        console.log("authenticated useEffect ran")
        authenticated && setRedirectToReferrer(true)
    }, [authenticated])

    if (redirectToReferrer === true) {
        return <Redirect to={'/admin'} />

    }

    // Make the below function reusable
    const checkEmailInput = () => {
        var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (email.length > 0 && email.match(emailPattern)) {
            setShowEmailErrorText(false)
            setValidEmailInput(true)
        }
        else if (email.length === 0) {
            setShowEmailErrorText(false)
            setValidEmailInput(false)
        }
        else {
            setShowEmailErrorText(true)
            setValidEmailInput(false)
        }
    };

    const handleLogin = (e) => {
        if (email === "" && password === "") {
            setShowEmailErrorText(true)
            setValidEmailInput(false)
        } else {
            login(email, password)
            e.preventDefault()
        }
    }

    return (
        <div className={classes.login}>
            <Snackbar
                message={error?.description || ""}
                open={showError}
                close={showError}
                place="tr"
                color="danger"
                closeNotification={() => { setShowError(false), setError(null) }}
            />
            <div className={classes.logo}>
                <img src={logo} alt="market for you logo" />
            </div>
            <div className={classes.loginContainer}>
                <div className={classes.loginPrompt}>
                    <div className={classes.loginPromptBottom} >
                        <h1>Welcome Back!</h1>
                        <div className={classes.loginPromptInputs}>
                            <div className={`${classes.InputText} + ${showEmailErrorText && classes.error}`}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder='Your email'
                                    value={email}
                                    onBlur={checkEmailInput}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {showEmailErrorText && <span>Your email is incorrect</span>}
                            </div>
                            <div className={classes.InputText}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password" name="password"
                                    placeholder='Your password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />

                            </div>
                        </div>
                        <div className={classes.forgotPassword}>
                            <Link to="/login/forgetpassword">I forgot my password</Link>
                        </div>
                        <div className={classes.loginButton}>
                            <RoundedButton
                                color="secondary"
                                type={"submit"}
                                onClick={handleLogin}
                            > Login
                            </RoundedButton>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login