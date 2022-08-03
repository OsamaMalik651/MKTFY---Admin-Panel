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
import backIcon from "assets/img/icon_back.svg"

import { Link } from 'react-router-dom';
import { primaryColor } from 'assets/jss/material-dashboard-react';
import { check } from 'prettier';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles)

const Login = () => {
    const classes = useStyles()
    const { authenticated, login } = useContext(AuthContext);
    const { state } = useLocation()
    //Component State
    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
    const [email, setEmail] = useState("");

    const [validEmailInput, setValidEmailInput] = useState(false);
    const [showEmailErrorText, setShowEmailErrorText] = useState(false)

    useEffect(() => {
        authenticated && setRedirectToReferrer(true)
    }, [authenticated])

    if (redirectToReferrer === true) {
        return <Redirect to={state?.from || '/'} />

    }
    const history = useHistory()
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
                <div className={classes.forgetPassword}>
                    <div className={classes.forgetPasswordTop} >
                        <button onClick={() => history.goBack()}>
                            <img src={backIcon} alt="close button" />
                        </button>
                        <button onClick={() => history.goBack()}>
                            <img src={closeIcon} alt="close button" />
                        </button>
                    </div>
                    <div className={classes.forgetPasswordBottom} >
                        <h1>Forgot Your Password</h1>
                        <p>It’s okay, these things happen. Please enter your email in the field below. We will send you an email to reset your password.</p>
                        <div className={classes.forgetPasswordInput}>
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
                        </div>
                        <div className={classes.loginButton} >
                            <RoundedButton color="primary"
                                onClick={() => history.goBack()}>Sumbit</RoundedButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login