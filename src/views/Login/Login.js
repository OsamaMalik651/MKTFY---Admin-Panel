import React, { useEffect, useState } from 'react'
import { AuthContext } from 'context/authContext'
import { useContext } from 'react';
import RoundedButton from 'components/RoundedButton/RoundedButton';
import { Redirect, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as DropDownArrow } from "assets/img/dropdownarrow.svg"

import { Button, makeStyles } from '@material-ui/core';
import styles from "assets/jss/material-dashboard-react/views/loginStyle"
import logo from "assets/img/logo.svg"
import closeIcon from "assets/img/icon_close.svg"
import { Link } from 'react-router-dom';
import { primaryColor } from 'assets/jss/material-dashboard-react';
import { check } from 'prettier';

const useStyles = makeStyles(styles)

const Login = () => {
    const classes = useStyles()
    const { authenticated, login } = useContext(AuthContext);
    const { state } = useLocation()
    //Component State
    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmailInput, setValidEmailInput] = useState(false);
    const [showEmailErrorText, setShowEmailErrorText] = useState(false)

    useEffect(() => {
        authenticated && setRedirectToReferrer(true)
    }, [authenticated])

    if (redirectToReferrer === true) {
        return <Redirect to={state?.from || '/'} />

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

    return (
        // <div>Login Page
        //     <RoundedButton
        //         size="sm"
        //         color="primary"
        //         onClick={login}
        //     >
        //         Login
        //     </RoundedButton>

        // </div>
        <div className={classes.login}>
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
                                onClick={login}
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