import backgroundImage from "assets/img/background_begin.svg"
import { grayColor } from "assets/jss/material-dashboard-react";
import { whiteColor } from "assets/jss/material-dashboard-react";

const loginStyle = {
    login: {
        width: "100vw",
        height: "100vh",
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: "cover",
        opacity: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "3.5rem"
    },
    logo: {
        alignSelf: "flex-start",
        justifySelf: "flex-start",
        paddingTop: "5.25rem",
        paddingLeft: "8.875rem",
    },
    loginContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    loginPrompt: {
        width: "50.5rem",
        height: "39.375rem",
        background: "#fff 0% 0% no-repeat padding-box",
        boxShadow: "0px 7px 12px #00000024",
        borderRadius: "10px",
        opacity: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    loginPromptBottom: {
        width: "33.25rem",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1.5rem",
        marginTop: "3.75rem",
        "& h1": {
            fontWeight: "bold",
            fontSize: "2.5rem",
            color: "#9349de",
            lineHeight: "3.125rem",
            margin: "0.5rem auto",
        },
    },
    forgotPassword: {
        width: "inherit",
        textAlign: "right",
        fontSize: "0.8rem",
        marginBottom: "1rem",
        "& a": {
            fontFamily: "open sans, sans- serif",
            color: "#ffba00",
            fontSize: "0.9rem",
            fontWeight: "normal",
        },
    },
    loginButton: {
        marginBottom: "3.75rem",
        marginTop: "auto"
    },
    loginPromptInputs: {
        width: "inherit",
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        gap: "2.375rem",

    },
    InputText: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "0.375rem",
        minHeight: "fit-content",
        fontFamily: "open sans",
        "& label": {
            color: "#6B6B6C",
            fontSize: "1rem",
            fontWeight: "600"
        },
        "& input": {
            fontSize: "1rem",
            height: "3.375rem",
            paddingLeft: "1rem",
            border: `1px solid ${grayColor[4]}`,
            borderRadius: "0.25rem",
            backgroundColor: whiteColor,
            // textTransform: "none",
        },
        "& input::placeholder": {
            fontSize: "1.25rem",
            color: "#4D4D4D60",
        }, "& input:focus": {
            outline: "none !important",
            border: "1px solid #9349DE",
        },
        "& textarea": {
            height: "7rem",
            resize: "none",
            backgroundColor: whiteColor,
            border: `1px solid ${grayColor[3]}`,
            borderRadius: "0.25rem",
            padding: "1.25rem 1.125rem",
            color: grayColor[11],
            fontSize: "1rem",
            fontFamily: "open sans"
        },
        "& svg": {
            position: "absolute",
            top: "3.375rem",
            right: "0.625rem",

        },
        "& span": {
            marginBottom: "1rem",
            color: "#FF2C2C",
            fontSize: "0.813rem",
            marginBottom: "0"
        }
    },
    error: {
        "& label": {
            color: "#FF2C2C",
        },
        "& input": {
            outline: "none !important",
            border: "1px solid #FF2C2C",
        },
        "& input:focus": {
            outline: "none !important",
            border: "1px solid #FF2C2C",
        },
    },
    forgetPassword: {
        width: "50.5rem",
        height: "34.875rem",
        background: "#fff 0% 0% no-repeat padding-box",
        boxShadow: "0px 7px 12px #00000024",
        borderRadius: "10px",
        opacity: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    forgetPasswordTop: {
        width: "inherit",
        alignSelf: "flex-start",
        display: "flex",
        justifyContent: "space-between",
        margin: "1.875rem 1.875rem auto auto",
        "& button": {
            background: "none",
            border: "none",
            cursor: "pointer",
            margin: "0rem 1.875rem 0rem 1.875rem",
        }
    },
    forgetPasswordBottom: {
        width: "33.25rem",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: "open sans",
        "& h1": {
            fontWeight: "800",
            fontSize: "2.5rem",
            color: "#9349de",
            lineHeight: "3.125rem",
            marginTop: "0.5rem",
            marginBottom: "0rem",
        },
        "& p": {
            fontWeight: "500",
            fontSize: "1.4rem",
            color: "#888889",
            marginTop: "0.5rem",
            marginBottom: "0rem",
        }
    },
    forgetPasswordInput: {
        width: "inherit",
        height: "max-content",
        marginTop: "3.75rem"
    }

}

export default loginStyle;